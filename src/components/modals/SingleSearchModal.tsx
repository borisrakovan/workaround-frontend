import React from "react"
import { SelectOption } from "../../types"
import FancyScroll from "../FancyScroll"
import LoadingSpinner from "../LoadingSpinner"
import Modal from "./Modal"
import ModalSearchInput from "./ModalSearchInput"

interface Props {
   isOpen: boolean
   onDismiss: () => void
   onSubmit: (selectedIds: string[]) => Promise<any>
   typeName: string
   options: SelectOption[]
   query: string
   setQuery: any
   loading: boolean
}

const SingleSearchModal = (props: Props) => {
   const {
      isOpen,
      onSubmit,
      onDismiss,
      typeName,
      options,
      query,
      setQuery,
      loading,
   } = props

   const handleDismiss = () => {
      setQuery("")
      onDismiss()
   }

   return (
      <Modal
         isOpen={isOpen}
         className="modal-base border-b-6 border-cyan bg-white shadow pb-4"
      >
         <div style={{ width: "486px" }}>
            <ModalSearchInput
               query={query}
               setQuery={setQuery}
               typeName={typeName}
               onClickX={() => handleDismiss()}
            />
            <div className="">
               <FancyScroll height="312px">
                  {() =>
                     loading ? (
                        <div className="flex items-center justify-center">
                           <LoadingSpinner size="sm" />
                        </div>
                     ) : (
                        <ul className="my-4 text-sm">
                           {options.map((o) => (
                              <li
                                 key={o.value}
                                 className="px-4 py-1 cursor-pointer hover:bg-gray-lightest capitalize"
                                 onClick={() => onSubmit([o.value])}
                              >
                                 {o.label}
                                 {o.info && (
                                    <span className="light"> - {o.info}</span>
                                 )}
                              </li>
                           ))}
                        </ul>
                     )
                  }
               </FancyScroll>
            </div>
         </div>
      </Modal>
   )
}

export default SingleSearchModal
