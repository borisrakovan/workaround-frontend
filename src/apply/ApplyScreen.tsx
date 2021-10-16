import { Form, Formik } from "formik"
import React from "react"
import * as Yup from "yup"
import InputFormControl from "../components/forms/InputFormControl"
import SelectFormControl from "../components/forms/SelectFormControl"
import { useAuthContext } from "../context/AuthContext"
import { SelectOption } from "../types"

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

   offeredPropertyName: string
   offeredPropertyLifestyleTypes: any[]
   offeredPropertyType: any
   offeredPropertyFacilityTypes: any[]
   offeredPropertyMetersSq: number
   offeredRoomCount: any
   offeredPropertyPrice: number
   offeredPropertyCoordinates: any

   preferredCities: any[]
   preferredLifestyleTypes: any[]
   preferredCommuteTypes: any
   preferredPropertyType: any
   preferredFacilityTypes: any[]
}

const lengthOfStayOptions: SelectOption[] = [
   {
      label: "Three months",
      value: "3months",
   },

   {
      label: "Six months",
      value: "6 months",
   },
   {
      label: "One year",
      value: "oneYear",
   },
   {
      label: "Two years",
      value: "twoYears",
   },
]

const ApplyScreen = (props: Props) => {
   const { currentUser } = useAuthContext()
   const handleSubmit = (values: ApplicationValues) => {
      console.log(values)
      return Promise.resolve()
   }

   const initialValues: ApplicationValues = {
      userId: "1",
      fullName: "",
      email: "",
      occupation: "",
      monthlyIncome: 0,

      numberOfPeople: 1,
      lengthOfStay: null,
      petFriendly: false,
      moveInDate: new Date(),

      offeredPropertyName: "",
      offeredPropertyLifestyleTypes: [],
      offeredPropertyType: null,
      offeredPropertyFacilityTypes: [],
      offeredPropertyMetersSq: 0,
      offeredRoomCount: "",
      offeredPropertyPrice: 0,
      offeredPropertyCoordinates: null,
      preferredCities: [],
      preferredLifestyleTypes: [],
      preferredCommuteTypes: [],
      preferredPropertyType: null,
      preferredFacilityTypes: [],
   }

   return (
      <div>
         <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
               const { setSubmitting } = actions
               handleSubmit(values).finally(() => {
                  setSubmitting(false)
               })
            }}
            validationSchema={Yup.object({
               username: Yup.string().required("This field is required"),
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
                  <h1>Step 1: Personal information</h1>
                  <h1>Step 2: General stay information</h1>
                  <h1>Step 3: Offered property</h1>
                  <h1>Step 3: property preferences</h1>

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
                  <div className="row">
                     <div className="pb-4 col-span-6">
                        <SelectFormControl
                           label="Length of stay"
                           name="legthOfStay"
                           options={lengthOfStayOptions}
                        />
                     </div>
                     <div className="pb-4 col-span-6">
                        <InputFormControl
                           label="Number of people"
                           name="numberOfPeople"
                           placeholder="Enter the number of other guests"
                           type="number"
                        />
                     </div>
                  </div>
                  <button type="submit" className={`btn-lg-orange`} disabled={false}>
                     Submit application
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   )
}

export default ApplyScreen
