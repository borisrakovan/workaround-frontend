import { ErrorMessage, Field } from "formik"
import React from "react"
import Select from "react-select"

interface Props {
   label?: string
   name: string
   options: {
      value: string | number
      label: string
   }[]
   onChange?: () => any
   renderRight?: () => JSX.Element
   isDisabled?: boolean
}

const SelectFormControl = (props: Props) => {
   const { label, name, renderRight, options, isDisabled } = props

   return (
      <div className="form-control">
         { label && <div className="flex justify-between">
            <label className="font-bold block mb-2" htmlFor={name}>
               {label}
            </label>
            {renderRight && renderRight()}
         </div> }
         <Field name={name}>
            {({ field, form }: any) => {
               return (
                  <Select
                     isDisabled={isDisabled}
                     options={options}
                     isSearchable={false}
                     name={field.name}
                     value={field.value}
                     onChange={(option: any) => {
                        form.setFieldValue(field.name, option)
                        if (props.onChange) {
                           props.onChange()
                        }
                     }}
                     className="react-select-container"
                     classNamePrefix="react-select"
                  />
               )
            }}
         </Field>
         <ErrorMessage name={name}>
            {(errorMsg: string) => (
               <p className="text-red text-xs pt-1">{errorMsg}</p>
            )}
         </ErrorMessage>
      </div>
   )
}

export default React.memo(SelectFormControl)
