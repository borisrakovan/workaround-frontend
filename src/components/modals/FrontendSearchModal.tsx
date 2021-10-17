import React, { useEffect, useState } from "react"
import { asOptionsWithName } from "../../helpers"
import SearchModal from "./SearchModal"
import SingleSearchModal from "./SingleSearchModal"

export interface SearchValues {
   [key: string]: boolean
}

interface Props {
   isOpen: boolean
   onDismiss: () => void
   onSubmit: (selectedIds: string[]) => Promise<any>
   typeName: string
   allOptions: {
      id: string
      name: string
   }[]
   singleSearch?: boolean
}

const FrontendSearchModal = (props: Props) => {
   const { singleSearch } = props

   const allOptions = asOptionsWithName(props.allOptions)

   const [options, setOptions] = useState(allOptions)
   const [query, setQuery] = useState("")

   useEffect(() => {
      setOptions(allOptions)
   }, [allOptions.length])

   useEffect(() => {
      setOptions(
         allOptions.filter((o) =>
            o.label.toLowerCase().includes(query.toLocaleLowerCase())
         )
      )
   }, [query])

   return singleSearch ? (
      <SingleSearchModal
         {...props}
         options={options}
         query={query}
         setQuery={setQuery}
         loading={false}
      />
   ) : (
      <SearchModal
         {...props}
         options={options}
         query={query}
         setQuery={setQuery}
         loading={false}
      />
   )
}

export default FrontendSearchModal
