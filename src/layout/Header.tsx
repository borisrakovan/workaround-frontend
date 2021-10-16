import React from "react"
import WorkaroundLogo from "../WorkaroundLogo"

interface Props {}

const Header = (props: Props) => {
   return (
      <header>
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
