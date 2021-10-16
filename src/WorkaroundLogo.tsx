import React from "react"
import { ReactComponent as IconGlobe } from "./assets/logo/globe2.svg"

interface Props {}

const WorkaroundLogo = (props: Props) => {
   return (
      <div className="text-orange flex items-center px-2">
         <div className=" text-3xl" style={{ fontFamily: "Fredoka One, cursive" }}>
            <span className="text-blue-light">work</span>around
         </div>
         <div className="ml-1 text-blue-light">
            <IconGlobe />
         </div>
      </div>
   )
}

export default WorkaroundLogo
