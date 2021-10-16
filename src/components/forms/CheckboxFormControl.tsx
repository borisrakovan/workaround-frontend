import { ErrorMessage, Field } from "formik"
import React from "react"

interface Props {
   label: JSX.Element
   name: string
}

const CheckboxFormControl = (props: Props) => {
   const { label, name } = props

   return (
      <div className="form-control">
         <div className="flex items-center ">
            <div className="relative" style={{ bottom: "-0.32rem" }}>
               <Field type="checkbox" name={name} />
            </div>
            <label htmlFor={name} className={`ml-2 cursor-default-important`}>
               {label}
            </label>
         </div>
         <ErrorMessage name={name}>
            {(errorMsg: string) => (
               <p className="text-red text-xs pt-1">{errorMsg}</p>
            )}
         </ErrorMessage>
      </div>
   )
}

export default CheckboxFormControl
