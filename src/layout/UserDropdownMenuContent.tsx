import React from "react"
import { OverlayMenuOption } from "../types"
import OverlayMenu from "./OverlayMenu"

interface Props {
   isOpen: boolean
   close: () => void
   options: OverlayMenuOption[]
}

const UserDropdownMenuContent = (props: Props) => {
   const { isOpen, close, options } = props

   return (
      <div className="">
         <OverlayMenu
            isOpen={isOpen}
            close={close}
            className="top-20 right-12"
            menuOptions={options}
         />
      </div>
   )
}

export default UserDropdownMenuContent
