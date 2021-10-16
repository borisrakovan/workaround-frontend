import { Formik, Form } from "formik"
import React from "react"
import InputFormControl from "./forms/InputFormControl"
import * as Yup from "yup"
import { setTimeout } from "timers"
import { Button } from "@mui/material"
import { useAuthContext } from "../context/AuthContext"

interface Props {}

export const LoginScreen = (props: Props) => {
   const { login, currentUser } = useAuthContext()

   const handleLogin = async ({
      email,
      password,
   }: {
      email: string
      password: string
   }) => {
      await login(email, password, 1000)
   }

   return (
      <div className="flex justify-center">
         <Formik
            initialValues={{
               email: "",
               password: "",
            }}
            onSubmit={(values, actions) => handleLogin(values)}
            validationSchema={Yup.object({
               email: Yup.string()
                  .required("This field is required")
                  .email("Please enter a valid email address"),
               password: Yup.string().required("This field is required"),
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
                  <div className="mb-5">
                     <InputFormControl
                        label="Enter email"
                        placeholder=""
                        name="email"
                        type="text"
                     />
                  </div>
                  <div className="mb-5">
                     <InputFormControl
                        label="Enter password"
                        placeholder=""
                        name="password"
                        type="password"
                     />
                  </div>
                  <Button variant="contained" color="success" fullWidth type="submit">
                     Login
                  </Button>
               </Form>
            )}
         </Formik>
      </div>
   )
}
