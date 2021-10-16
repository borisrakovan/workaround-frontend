import { Form, Formik } from "formik"
import React from "react"
import * as Yup from "yup"
import InputFormControl from "../components/forms/InputFormControl"
import { SelectOption } from "../types"

interface Props {}

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
   const handleSubmit = (values: any) => {
      console.log(values)
      return Promise.resolve()
   }

   return (
      <div>
         <Formik
            initialValues={{
               fullName: "",
               email: "",

               lengthOfStay: lengthOfStayOptions[0],
            }}
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
                  <div className="row">
                     <div className="pb-4 col-span-6">
                        <InputFormControl
                           label="Username"
                           name="username"
                           placeholder="Your Username"
                           type="text"
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
