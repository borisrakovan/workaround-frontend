import React from "react"
import { Link } from "react-router-dom"

interface Props {
   linkTo: string
   children: string
   className?: string
}

const HeaderMenuItem = (props: Props) => {
   const { linkTo, children, className } = props

   return (
      <li className="inline-block px-3 mx-1 my-2">
         <Link to={linkTo} className={`btn-menu capitalize ${className || ""}`}>
            {children}
         </Link>
      </li>
   )
}

export default HeaderMenuItem
