import { Form, Formik } from "formik"
import React, { useState } from "react"
import * as Yup from "yup"
import CheckboxFormControl from "../forms/CheckboxFormControl"
import DateFormControl from "../forms/DateFormControl"
import InputFormControl from "../forms/InputFormControl"
import MultiObjectSelectionFormControl from "../forms/MultiObjectSelectionFormControl"
import ObjectSelectionFormControl from "../forms/ObjectSelectionFormControl"
import SelectFormControl from "../forms/SelectFormControl"
import FrontendSearchModal from "../modals/FrontendSearchModal"
import { useAuthContext } from "../../context/AuthContext"
import { useCities } from "../../graphql/queries"
import { usePropertyParameters } from "../../hooks/usePropertyParameters"
import { SelectOption } from "../../types"
import { CityType, UserType } from "../../types/generated"
import CheckboxGroup from "./CheckboxGroup"
import { useCreateApplication } from "../../graphql/mutations"

interface Props {}

interface ApplicationValues {
   userId: string
   fullName: string
   email: string
   occupation: string
   monthlyIncome: number
   numberOfPeople: number

   lengthOfStay: any
   petFriendly: false
   moveInDate: Date

   preferredCities: any[]
   preferredLifestyleTypes: any[]
   preferredCommuteTypes: any
   preferredPropertyType: any
   preferredFacilityTypes: any[]
}

const ApplyScreen = (props: Props) => {
   const { currentUser } = useAuthContext() as { currentUser: UserType }
   const [deadline, setDeadline] = useState<Date | null>(null)

   const { mutate: createApplication, data, loading, error } = useCreateApplication()

   console.log(error)
   console.log(data)

   const [cityPreferences, setCityPreferences] = useState<(CityType | null)[]>([
      null,
      null,
      null,
   ])
   const [selectingCityPreference, setSelectingCityPreference] = useState<
      number | null
   >(null)

   const {
      lifeStyleTypes,
      facilityTypes,
      lengthsOfStay,
      lengthsOfStayOptions,
      roomTypes,
      propertyTypes,
      commuteTypes,
      allLoaded,
   } = usePropertyParameters()

   const { data: citiesData } = useCities()
   const cities = citiesData?.availableCities || []

   const serializeTypeArray = (arr: { id: string; name: string }[], title: string) =>
      arr.map((o) => ({ ...o, value: `${title}_${o.id}` }))

   const checkboxGroups = {
      surroundings: serializeTypeArray(lifeStyleTypes, "surroundings"),
      facilities: serializeTypeArray(facilityTypes, "facilities"),
      "property types": serializeTypeArray(propertyTypes, "property types"),
      "commute preferences": serializeTypeArray(commuteTypes, "commute preferences"),
   }

   const handleSubmit = (values: ApplicationValues) => {
      console.log(values)
      // createApplication({variables: {
      //    commuteTypesIds:
      // }})
      return Promise.resolve()
   }

   const handleSelectCityPreference = (i: number, pref: CityType | null) => {
      setCityPreferences((old) => {
         const a = [...old]
         a[i] = pref
         return a
      })
      setSelectingCityPreference(null)
   }

   const initialValues: ApplicationValues = {
      userId: currentUser.id,
      fullName: currentUser.firstName + " " + currentUser.lastName,
      email: currentUser.email,
      occupation: "",
      monthlyIncome: 0,

      numberOfPeople: 1,
      lengthOfStay: lengthsOfStay[0],
      petFriendly: false,
      moveInDate: new Date(),

      preferredCities: [],
      preferredLifestyleTypes: [],
      preferredCommuteTypes: [],
      preferredPropertyType: null,
      preferredFacilityTypes: [],
   }

   return (
      <div>
         <h1 className="mb-6">Application form</h1>
         <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
               // console.log(values)
               const { setSubmitting } = actions
               handleSubmit(values).finally(() => {
                  setSubmitting(false)
               })
            }}
            validationSchema={Yup.object({
               // username: Yup.string().required("This field is required"),
            })}
            validateOnBlur={false}
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
                  {/* <h1>Step 3: Offered property</h1> */}

                  <h2 className="pt-8 mt-6 mb-4 border-t border-gray">
                     Step 1: Personal information
                  </h2>
                  <div className="row">
                     <div className="pb-4 col-span-6">
                        <InputFormControl
                           label="Full name"
                           name="fullName"
                           placeholder="Enter your full name"
                           type="text"
                           disabled={true}
                        />
                     </div>
                     <div className="pb-4 col-span-6">
                        <InputFormControl
                           label="Email address"
                           name="email"
                           placeholder="Enter your email"
                           type="text"
                           disabled={true}
                        />
                     </div>
                     <div className="pb-4 col-span-6">
                        <InputFormControl
                           label="Occupation"
                           name="occupation"
                           placeholder="Enter your current profession"
                           type="text"
                        />
                     </div>
                  </div>

                  <h2 className="pt-8 mt-6 mb-4 border-t border-gray">
                     Step 2: General stay information
                  </h2>

                  <div className="row">
                     <div className="pb-4 col-span-6">
                        <SelectFormControl
                           label="Length of stay"
                           name="legthOfStay"
                           options={lengthsOfStayOptions}
                        />
                     </div>
                     <div className="pb-4 col-span-2">
                        <InputFormControl
                           label="Number of people"
                           name="numberOfPeople"
                           placeholder="Enter the number of other guests"
                           type="number"
                        />
                     </div>
                  </div>
                  <div className="col-span-12 my-4">
                     <DateFormControl
                        label="Move in date"
                        selectedDate={deadline}
                        setSelectedDate={setDeadline}
                     />
                  </div>
                  <div className="col-span-12">
                     <CheckboxFormControl
                        label={<>Pet friendly</>}
                        name="petFriendly"
                     />
                  </div>
                  <h2 className="pt-8 mt-6 mb-4 border-t border-gray">
                     Step 3: Destination Property Preferences
                  </h2>
                  <h3>City preferences</h3>
                  {cityPreferences.map((_, i) => (
                     <ObjectSelectionFormControl
                        key={i}
                        label={`${i + 1}. preference`}
                        selectedObject={cityPreferences[i]}
                        setSelectedObject={(pref: CityType | null) =>
                           handleSelectCityPreference(i, pref)
                        }
                        objectLoading={false}
                        promptText="Choose city"
                        onClickPrompt={() => setSelectingCityPreference(i)}
                     />
                  ))}
                  {Object.entries(checkboxGroups).map(([k, v]) => (
                     <CheckboxGroup title={k} options={v} />
                  ))}
                  <CheckboxGroup title="Facilities" options={facilityTypes} />
                  <CheckboxGroup title="Property types" options={propertyTypes} />
                  <CheckboxGroup title="Commute preferences" options={commuteTypes} />
                  <button type="submit" className={`btn-lg-orange`}>
                     Submit application
                  </button>
               </Form>
            )}
         </Formik>
         <FrontendSearchModal
            isOpen={selectingCityPreference !== null}
            onDismiss={() => setSelectingCityPreference(null)}
            onSubmit={(ids) => {
               if (selectingCityPreference === null) {
                  return Promise.resolve()
               }
               const selectedCity = cities.find((c) => c.id == ids[0]) as CityType
               handleSelectCityPreference(selectingCityPreference, selectedCity)
               return Promise.resolve()
            }}
            allOptions={cities}
            typeName="city"
            singleSearch
         />
      </div>
   )
}

export default ApplyScreen
