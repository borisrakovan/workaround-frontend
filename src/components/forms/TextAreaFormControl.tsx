import { ErrorMessage, Field } from "formik"
import React from "react"

interface Props {
   name: string
   placeholder: string
   label?: string
   styleCls?: string
   heightCls?: string
   renderRight?: () => JSX.Element
   disableResize?: boolean
}

const TextAreaFormControl = (props: Props) => {
   const { name, placeholder, label, renderRight, disableResize } = props

   return (
      <div className={`form-control ${props.styleCls ? props.styleCls : ""}`}>
         <div className="flex justify-between">
            <label htmlFor={name} className={label ? "font-bold block mb-2" : ""}>
               {label || ""}
            </label>
            {renderRight && renderRight()}
         </div>
         <Field name={name}>
            {({ field, meta }: any) => (
               <textarea
                  id={name}
                  placeholder={placeholder}
                  className={`w-full ${props.heightCls || ""} ${
                     meta.touched && meta.error ? "border-red" : ""
                  } ${disableResize ? "resize-none" : ""}`}
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

export default TextAreaFormControl
