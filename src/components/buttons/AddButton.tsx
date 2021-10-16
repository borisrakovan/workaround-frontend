import React from "react"
import ActionButton from "./ActionButton"
import { ReactComponent as IconAdd } from "../../../../assets/icons/add_circle.svg"

interface Props {
   text: string
   disabled?: boolean
   onClick?: (e: any) => void
   linkTo?: string
   red?: boolean
}

const AddButton = (props: Props) => {
   return (
      <ActionButton {...props}>
         <IconAdd />
      </ActionButton>
   )
}

export default AddButton
