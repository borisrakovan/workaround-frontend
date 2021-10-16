import React from "react"
import AddButton from "../buttons/AddButton"
import Pill from "../Pill"

interface Props<T> {
   label: string
   selectPrompt: string
   onClickSelect: () => void
   selectedObjects: T[]
   setSelectedObjects: any
   getObjectName?: (obj: T) => string
}

const MultiObjectSelectionFormControl = <T extends { id: string; name?: string }>(
   props: Props<T>
) => {
   const {
      label,
      selectPrompt,
      onClickSelect,
      selectedObjects,
      setSelectedObjects,
      getObjectName,
   } = props

   const unselectObject = (obj: T) => {
      setSelectedObjects((old: T[]) => old.filter((o) => o.id != obj.id))
   }

   return (
      <div className="form-control">
         <div className="flex items-center justify-between mb-2">
            <label className="font-bold block">{label}</label>
            <AddButton text={selectPrompt} onClick={onClickSelect} />
         </div>
         <div className="flex items-center my-1 flex-wrap">
            {selectedObjects.map((o) => (
               <div key={o.id} className="mx-1 my-1">
                  <Pill
                     cancelable
                     onClickCancel={() => unselectObject(o)}
                     color="gray"
                     text={getObjectName?.(o) || o.name || ""}
                     capitalize
                  />
               </div>
            ))}
         </div>
      </div>
   )
}

export default MultiObjectSelectionFormControl
