import { Formik, Form } from "formik"
import React, { useState } from "react"
import InputFormControl from "./forms/InputFormControl"
import * as Yup from "yup"
import { setTimeout } from "timers"
import { Button } from "@mui/material"
import { useAuthContext } from "../context/AuthContext"
import { useHistory } from "react-router"
import qs from "qs"
import LoadingSpinner from "./LoadingSpinner"

interface Props {}

export const LoginScreen = (props: Props) => {
   const { login, currentUser } = useAuthContext()
   const [error, setError] = useState<null | string>(null)
   const history = useHistory()
   const [loginLoading, setLoginLoading] = useState(false)

   let params: any = qs.parse(window.location.search, { ignoreQueryPrefix: true })

   const handleLogin = ({ email, password }: { email: string; password: string }) =>
      login(email, password, 1000)
         .then(() => {
            const redirectTo = params.redirectTo || "/"
            if (redirectTo) {
               history.push(redirectTo)
            }
            setError(null)
         })
         .catch((error) => {
            console.log(error)
            setError(error.message)
         })
         .finally(() => setLoginLoading(false))

   return (
      <div className="row">
         <div className="col-span-6 col-start-4">
            {error && <p className="text-red">{error}</p>}
            <div className="">
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
                        {loginLoading ? (
                           <LoadingSpinner size="sm" />
                        ) : (
                           <button className="btn-lg-orange w-full text-center">
                              Login
                           </button>
                        )}
                        {/* <Button variant="contained" color="success" fullWidth type="submit">
                     Login
                  </Button> */}
                     </Form>
                  )}
               </Formik>
            </div>
         </div>
      </div>
   )
}
