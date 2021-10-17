import { Form, Formik } from "formik"
import React from "react"
import { SelectOption } from "../../types"
import FancyScroll from "../FancyScroll"
import CheckboxFormControl from "../forms/CheckboxFormControl"
import LoadingSpinner from "../LoadingSpinner"
import Modal from "./Modal"
import ModalSearchInput from "./ModalSearchInput"

export interface FilterSearchValues {
   [key: string]: boolean
}

interface Props {
   isOpen: boolean
   onDismiss: () => void
   onSubmit: (selectedIds: string[]) => Promise<any>
   typeName: string
   options: SelectOption[]
   query: string
   setQuery: any
   loading: boolean
   preselectIds?: string[]
}

const SearchModal = (props: Props) => {
   const {
      isOpen,
      onSubmit,
      onDismiss,
      typeName,
      options,
      query,
      setQuery,
      loading,
      preselectIds,
   } = props

   let initialValues: FilterSearchValues = {}

   for (const o of options) {
      initialValues[o.value] = preselectIds?.includes(o.value) ?? false
   }

   const handleSubmit = (values: FilterSearchValues) => {
      const ids = Object.entries(values)
         .filter(([_, v]) => v)
         .map(([k, _]) => k)
      return onSubmit(ids)
   }

   const handleDismiss = () => {
      setQuery("")
      onDismiss()
   }

   return (
      <Modal
         isOpen={isOpen}
         className="modal-base w-80 border-b-6 border-cyan bg-white shadow "
      >
         <Formik
            // enableReinitialize
            initialValues={initialValues}
            onSubmit={(values, actions) => {
               const { setSubmitting } = actions
               handleSubmit(values).finally(handleDismiss)
            }}
         >
            {({ isSubmitting }) => (
               <Form>
                  <ModalSearchInput
                     query={query}
                     setQuery={setQuery}
                     typeName={typeName}
                  />
                  <div className="py-1">
                     <FancyScroll height="312px">
                        {() =>
                           loading ? (
                              <div className="flex items-center justify-center">
                                 <LoadingSpinner size="sm" />
                              </div>
                           ) : (
                              <ul className="my-4 pl-2">
                                 {options.map((o) => (
                                    <li key={o.value} className="pb-1 text-sm">
                                       <CheckboxFormControl
                                          label={
                                             <span className="text-gray-dark text-sm capitalize">
                                                {o.label}
                                                {o.info && (
                                                   <span className="light">
                                                      {" "}
                                                      - {o.info}
                                                   </span>
                                                )}
                                             </span>
                                          }
                                          name={o.value}
                                       />
                                    </li>
                                 ))}
                              </ul>
                           )
                        }
                     </FancyScroll>
                  </div>
                  <div className="my-2 flex items-center">
                     <div className="w-1/2 flex justify-center items-center">
                        <button
                           type="button"
                           className="text-red text-xs tracking-wider hover:underline"
                           onClick={handleDismiss}
                        >
                           Cancel
                        </button>
                     </div>
                     <div className="w-1/2 flex justify-center items-center">
                        {isSubmitting ? (
                           <LoadingSpinner size="xs" />
                        ) : (
                           <>
                              <button type="submit" className="btn-sm-cyan">
                                 Apply
                              </button>
                           </>
                        )}
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </Modal>
   )
}

export default SearchModal
