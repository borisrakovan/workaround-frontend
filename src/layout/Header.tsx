import React from "react"
import WorkaroundLogo from "../WorkaroundLogo"

interface Props {}

const Header = (props: Props) => {
   return (
      <header className="absolute w-full z-10">
         <div className="flex items-center justify-between">
            <div>
               <WorkaroundLogo />
            </div>
            <div>kkt</div>
         </div>
      </header>
   )
}

export default Header
