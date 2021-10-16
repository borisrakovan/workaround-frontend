import React from "react"
import { Link } from "react-router-dom"
import WorkaroundLogo from "../WorkaroundLogo"
import HeaderMenuItem from "./HeaderMenuItem"
import HeaderMenuSeparator from "./HeaderMenuSeparator"
import UserDropdownMenu from "./UserDropdownMenu"

interface Props {}

const Header = (props: Props) => {
   const currentUser = null
   const userLoading = false

   const handleLogout = () => {}

   return (
      <header className={`site-header absolute z-10 py-3 flex items-center shadow`}>
         <div className="flex items-center justify-between w-full">
            <div className="px-2">
               <Link to="/">
                  <WorkaroundLogo />
               </Link>
            </div>
            <nav className="md:hidden flex items-center">
               <ul className="menu mx-10 flex items-center">
                  <HeaderMenuItem linkTo="/explore">Explore</HeaderMenuItem>
                  {!currentUser || userLoading ? (
                     <>
                        <HeaderMenuItem linkTo="/about">About us</HeaderMenuItem>
                        <HeaderMenuItem linkTo="/signup" className="strong">
                           Sign up
                        </HeaderMenuItem>
                        <HeaderMenuSeparator />
                        <HeaderMenuItem linkTo="/login" className="dark">
                           Login
                        </HeaderMenuItem>
                     </>
                  ) : (
                     <>
                        <HeaderMenuItem linkTo="/my-materials">
                           My applications
                        </HeaderMenuItem>
                        <HeaderMenuSeparator />
                        <li className="inline-block px-3 mx-1 my-2">
                           <UserDropdownMenu
                              currentUser={currentUser}
                              onLogout={handleLogout}
                           />
                        </li>
                     </>
                  )}
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default Header
