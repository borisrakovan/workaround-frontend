import { ErrorMessage, Field } from "formik"
import React from "react"

interface Props {
   label: string
   labelHint?: string
   name: string
   placeholder: string
   disabled?: boolean
   type: string
   renderRight?: () => JSX.Element
}

const InputFormControl = (props: Props) => {
   const { label, labelHint, name, placeholder, type, renderRight, disabled } = props

   return (
      <div className="form-control">
         <div className="flex justify-between">
            <label className="font-bold block mb-2" htmlFor={name}>
               {label}
               {labelHint && (
                  <span className="font-normal text-sm"> {labelHint}</span>
               )}
            </label>
            {renderRight && renderRight()}
         </div>
         <Field name={name}>
            {({ field, meta }: any) => (
               <input
                  disabled={disabled}
                  id={name}
                  type={type}
                  placeholder={placeholder}
                  className={`w-full ${
                     meta.touched && meta.error ? "border-red" : ""
                  }`}
                  {...field}
               />
            )}
         </Field>
         <ErrorMessage name={name}>
            {(errorMsg: string) => (
               <p className="text-red text-xs pt-1">{errorMsg}</p>
            )}
         </ErrorMessage>
      </div>
   )
}

export default InputFormControl
