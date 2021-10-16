import classNames from "classnames"
import React from "react"
import { Link } from "react-router-dom"

interface Props {
   children: JSX.Element
   text: string
   disabled?: boolean
   onClick?: (e: any) => void
   linkTo?: string
   red?: boolean
}

const ActionButton = (props: Props) => {
   const { children, text, disabled, onClick, linkTo, red } = props

   const className = classNames(
      "flex items-center font-bold text-xs uppercase tracking-wide",
      {
         "text-red-light hover:text-red": red,
         "text-blue-light hover:text-blue": !red,
         "cursor-not-allowed hover:text-blue-light": disabled && !red,
         "cursor-not-allowed hover:text-red-light": disabled && red,
      }
   )

   return linkTo ? (
      <Link to={linkTo} className={`${className} hover:no-underline`}>
         <div className="mr-1">{children}</div>
         {text}
      </Link>
   ) : (
      <button
         type="button"
         className={className}
         onClick={onClick}
         disabled={disabled}
      >
         <div className="mr-1">{children}</div>
         {text}
      </button>
   )
}

export default ActionButton
