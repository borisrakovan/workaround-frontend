import classNames from "classnames"
import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as IconCancel } from "../../../../assets/icons/cross.svg"

export interface PillProps {
   text: string
   color: "gray" | "blue" | "orange"
   className?: string
   opaque?: boolean
   linkTo?: string
   onClick?: () => void
   cancelable?: boolean
   onClickCancel?: () => void
   capitalize?: boolean
}

const Pill = (props: PillProps) => {
   const {
      text,
      color,
      linkTo,
      onClick,
      opaque,
      cancelable,
      onClickCancel,
      capitalize,
   } = props

   const getBgColorClassName = () => {
      if (color === "blue") {
         return "bg-blue"
      } else if (color === "orange") {
         return "bg-orange"
      } else {
         return "bg-gray-lightest"
      }
   }

   const className = classNames(
      `tag-empl hover:no-underline ${props.className ?? ""}`,
      getBgColorClassName(),
      {
         "text-white hover:text-white": color == "orange",
         "text-gray-dark hover:text-gray-dark": color == "gray" || color == "blue",
         "bg-opacity-20": opaque,
      }
   )

   const handleClick = () => {
      onClick && onClick()
   }

   const handleClickCancel = () => {
      onClickCancel && onClickCancel()
   }

   const Body = (
      <>
         <div className={capitalize ? "capitalize" : ""}>{text}</div>
         {cancelable && (
            <button type="button" className=" ml-2" onClick={handleClickCancel}>
               <IconCancel />
            </button>
         )}
      </>
   )

   return linkTo ? (
      <Link to={linkTo} className={`flex justify-between items-center ${className}`}>
         {Body}
      </Link>
   ) : (
      <div
         onClick={handleClick}
         className={`flex justify-between items-center ${className}`}
      >
         {Body}
      </div>
   )
}

export default Pill
