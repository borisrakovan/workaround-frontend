import React from "react"
import CheckboxFormControl from "../forms/CheckboxFormControl"

interface Props {
   title: string
   options: { id: string; name: string }[]
}

const CheckboxGroup = (props: Props) => {
   const { title, options } = props

   return (
      <div className="my-8">
         <h3>{title}</h3>
         <div className="row my-4">
            {options.map((t) => (
               <>
                  <div className="col-span-3">
                     <CheckboxFormControl
                        label={<span className="capitalize">{t.name}</span>}
                        name={t.name || ""}
                     />
                  </div>
                  <div className="col-span-1"></div>
               </>
            ))}
         </div>
      </div>
   )
}

export default CheckboxGroup
