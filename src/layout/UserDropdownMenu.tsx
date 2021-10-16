import React, { useState } from "react"
import ProfilePicture from "../components/ProfilePicture"
import { OverlayMenuOption } from "../types"
import UserDropdownMenuContent from "./UserDropdownMenuContent"
import { ReactComponent as IconMore } from "../assets/icons/expand_more-24px.svg"
import { UserType } from "../types/generated"

interface Props {
   currentUser: UserType
   onLogout: () => void
}

export const userDropdownMenuOptions = (
   onLogout: () => void
): OverlayMenuOption[] => [
   {
      label: "Edit profile",
      linkTo: "/edit-profile",
   },
   {
      label: "Settings",
      linkTo: "/account-settings",
   },
   {
      label: "Log Out",
      onClick: onLogout,
      red: true,
   },
]

const UserDropdownMenu = (props: Props) => {
   const { currentUser, onLogout } = props

   const [showUserMenu, setShowUserMenu] = useState(false)

   const toggleShowUserMenu = () => {
      setShowUserMenu((old) => !old)
   }

   const options = userDropdownMenuOptions(onLogout)

   return (
      <div className="">
         <button
            type="button"
            className="btn-menu dark flex items-center tracking-wide font-medium"
            onClick={toggleShowUserMenu}
         >
            <ProfilePicture user={currentUser} size={9} />
            <span className="inline-block ml-3 mr-2">
               Hi, {currentUser?.firstName}
            </span>
            <IconMore width={18} height={18} />
         </button>
         <UserDropdownMenuContent
            isOpen={showUserMenu}
            close={() => setShowUserMenu(false)}
            options={options}
         />
      </div>
   )
}

export default UserDropdownMenu
