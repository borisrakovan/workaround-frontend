import React, { ChangeEvent } from "react"
import { ReactComponent as IconSearch } from "../../assets/icons/search-24px.svg"
import { ReactComponent as IconCancel } from "../../assets/icons/cross.svg"

interface Props {
   query: string
   setQuery: any
   typeName: string
   onClickX?: () => void
}

const ModalSearchInput = (props: Props) => {
   const { query, setQuery, typeName, onClickX } = props

   const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value)
      e.stopPropagation()
   }

   return (
      <div className="relative">
         <div
            className="absolute text-gray"
            style={{ top: "0.6rem", left: "0.6rem" }}
         >
            <IconSearch width={16} height={16} />
         </div>
         <input
            type="text"
            autoFocus
            className={"filter-search " + (query == "" ? "light" : "")}
            value={query}
            onChange={handleChangeInput}
            placeholder={`Search ${typeName} filter`}
         />
         {onClickX && (
            <button
               type="button"
               className="absolute"
               style={{ top: "0.96rem", right: "0.8rem" }}
               onClick={onClickX}
            >
               <IconCancel />
            </button>
         )}
      </div>
   )
}

export default ModalSearchInput
