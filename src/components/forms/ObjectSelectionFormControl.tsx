import React from "react"
import LoadingSpinner from "../LoadingSpinner"
import Pill from "../Pill"

interface Props {
   label: string
   selectedObject: null | { id: string; name: string }
   setSelectedObject: any
   objectLoading: boolean
   promptText: string
   onClickPrompt: () => void
}

const ObjectSelectionFormControl = (props: Props) => {
   const {
      label,
      selectedObject,
      setSelectedObject,
      objectLoading,
      promptText,
      onClickPrompt,
   } = props

   return (
      <div className="form-control flex items-center py-2">
         <label className=" font-bold block mr-3">{label}</label>
         <div className="inline-block">
            {!!selectedObject ? (
               <Pill
                  text={selectedObject.name}
                  color="orange"
                  cancelable
                  onClickCancel={() => setSelectedObject(null)}
                  capitalize
               />
            ) : objectLoading ? (
               <div className="">
                  <LoadingSpinner size="xs" />
               </div>
            ) : (
               <button type="button" className="btn-like-a" onClick={onClickPrompt}>
                  {promptText}
               </button>
            )}
         </div>
      </div>
   )
}

export default ObjectSelectionFormControl
