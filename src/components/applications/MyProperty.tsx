import { Form, Formik } from "formik"
import React, { useState } from "react"
import * as Yup from "yup"
import { useAuthContext } from "../../context/AuthContext"
import { useCreateProperty } from "../../graphql/mutations"
import {
   asOptionsWithName,
   deserializeTypeArray,
   getRandomInt,
   serializeTypeArray,
} from "../../helpers"
import { usePropertyParameters } from "../../hooks/usePropertyParameters"
import { createPropertyArgs, PointInputType, UserType } from "../../types/generated"
import CheckboxGroup from "../apply/CheckboxGroup"
import InputFormControl from "../forms/InputFormControl"
import SelectFormControl from "../forms/SelectFormControl"
import MapInput from "../MapInput"

interface Props {}

const MyProperty = (props: Props) => {
   const { currentUser } = useAuthContext() as { currentUser: UserType }
   const [coordinates, setCoordinates] = useState<number[] | null>(null)

   const [error, setError] = useState<null | string>(null)

   const {
      mutate: createProperty,
      data,
      loading,
      error: createError,
   } = useCreateProperty()

   const { lifeStyleTypes, facilityTypes, roomTypes, propertyTypes, allLoaded } =
      usePropertyParameters()

   const propertyTypeOptions = asOptionsWithName(propertyTypes)
   const roomTypeOptions = roomTypes.map((r) => ({ label: r, value: r }))

   const initialValues = {
      name: "",
      description: "",
      facilityTypeIds: [],
      lifestyleTypeIds: [],
      propertyType: propertyTypeOptions[0],
      metersSquared: 0,
      photoId: "",
      roomType: roomTypeOptions[0],
      usdWorth: 0,
   }

   const handleSubmit = (values: any) => {
      if (!coordinates) {
         console.log("object")
         setError("Please select the property location on the map")
         return Promise.resolve()
      }
      console.log(values)

      const pointCoords: PointInputType = {
         x: coordinates[0],
         y: coordinates[1],
      }
      const variables: createPropertyArgs = {
         name: values.name,
         description: values.description,
         facilityTypeIds: deserializeTypeArray(values, "facilities"),
         lifestyleTypeIds: deserializeTypeArray(values, "surroundings"),
         propertyTypeId: values.propertyType.value,
         metersSquared: values.metersSquared,
         photoId: `${getRandomInt(9)}.jpeg`,
         roomType: values.roomType.value,
         usdWorth: values.price,
         userId: currentUser?.id,
         coordinates: pointCoords,
      }
      console.log(variables)
      createProperty({
         variables,
      })
      return Promise.resolve()
   }

   const checkboxGroups = {
      facilities: serializeTypeArray(facilityTypes, "facilities"),
      surroundings: serializeTypeArray(lifeStyleTypes, "surroundings"),
   }

   return (
      <div>
         {error && <div className="my-2 red">{error}</div>}
         <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
               const { setSubmitting } = actions
               handleSubmit(values).finally(() => {
                  setSubmitting(false)
               })
            }}
            validationSchema={Yup.object({
               name: Yup.string().required("This field is required."),
               propertyType: Yup.object().required("This field is required."),
               // metersSquared: Yup.number().required("This field is required."),
               // usdWorth: Yup.number().required("This field is required."),
            })}
            validateOnBlur={true}
            validateOnChange={false}
         >
            {({
               errors,
               touched,
               values,
               isSubmitting,
               setFieldValue,
               setFieldError,
            }) => (
               <Form>
                  <h2 className="pt-8 mt-6 mb-4 border-t border-gray">
                     General information
                  </h2>
                  <div className="row">
                     <div className="pb-4 col-span-6">
                        <InputFormControl
                           label="Property name"
                           name="name"
                           placeholder="Enter the property name"
                           type="text"
                        />
                     </div>
                     <div className="pb-4 col-span-6">
                        <InputFormControl
                           label="Description"
                           name="description"
                           placeholder="Briefly describe your property"
                           type="text"
                        />
                     </div>
                  </div>
                  <div className="row">
                     <div className="pb-4 col-span-6">
                        <SelectFormControl
                           label="Property type"
                           name="propertyType"
                           options={propertyTypeOptions}
                        />
                     </div>
                     <div className="pb-4 col-span-6">
                        <SelectFormControl
                           label="Room type"
                           name="roomType"
                           options={roomTypeOptions}
                        />
                     </div>
                  </div>
                  <div className="row">
                     <div className="pb-4 col-span-4">
                        <InputFormControl
                           label="Meters squared"
                           name="metersSquared"
                           placeholder="Enter the number squared meters"
                           type="number"
                        />
                     </div>
                     <div className="pb-4 col-span-4 col-start-7">
                        <InputFormControl
                           label="Listing price"
                           name="price"
                           placeholder="Enter the listing price in €"
                           type="number"
                        />
                     </div>
                  </div>
                  <h2 className="pt-8 mt-6 mb-4 border-t border-gray">Location</h2>
                  <div className="w-full h-64">
                     <MapInput
                        markerCoords={coordinates || undefined}
                        onMarkerMove={setCoordinates}
                     />
                  </div>
                  <h2 className="pt-8 mt-6 mb-4 border-t border-gray">Other</h2>
                  {Object.entries(checkboxGroups).map(([k, v]) => (
                     <CheckboxGroup key={k} title={k} options={v} />
                  ))}
                  <button type="submit" className={`btn-lg-orange`}>
                     Submit property
                  </button>

                  {/* {loading ? (
                        <LoadingSpinner size="sm" />
                     ) : (
                     )} */}
               </Form>
            )}
         </Formik>
      </div>
   )
}

export default MyProperty
