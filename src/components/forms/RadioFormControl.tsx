import { Field, ErrorMessage } from "formik"
import React from "react"

interface Props {
   label: JSX.Element
   name: string
}

const RadioFormControl = (props: Props) => {
   const { label, name } = props

   return (
      <div className="form-control">
         <div className="flex items-center">
            <label htmlFor={name} className="ml-2 cursor-default-important">
               {label}
            </label>
            <Field type="radio" name={name} />
         </div>
         <ErrorMessage name={name}>
            {(errorMsg: string) => (
               <p className="text-red text-xs pt-1">{errorMsg}</p>
            )}
         </ErrorMessage>
      </div>
   )
}

export default RadioFormControl
