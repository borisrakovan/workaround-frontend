import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { OverlayMenuOption } from "../types"

interface Props {
   isOpen: boolean
   close: () => void
   menuOptions: OverlayMenuOption[]
   className: string
}

const OverlayMenu = (props: Props) => {
   const { isOpen, close, menuOptions, className } = props

   useEffect(() => {
      if (isOpen) {
         // timeout otherwise it causes a very rare bug
         setTimeout(() => document.addEventListener("click", close), 500)
      }
      return () => {
         document.removeEventListener("click", close)
      }
   }, [isOpen])

   return (
      <CSSTransition
         in={isOpen}
         timeout={300}
         unmountOnExit
         classNames="overlay-anim"
      >
         <div className={`overlay-popup rounded-md ${className}`}>
            <ul className="py-1">
               {menuOptions.map((o, idx) => (
                  <li key={idx}>
                     {o.render ? (
                        o.render(o)
                     ) : o.linkTo ? (
                        <Link
                           to={o.linkTo}
                           className={`btn-user-menu font-normal ${
                              o.red ? "red" : ""
                           }`}
                        >
                           {o.label}
                        </Link>
                     ) : o.href ? (
                        <a
                           href={o.href}
                           target="_blank"
                           rel="noreferrer"
                           className={`btn-user-menu font-normal ${
                              o.red ? "red" : ""
                           } `}
                        >
                           {o.label}
                        </a>
                     ) : (
                        <button
                           type="button"
                           onClick={o.onClick}
                           className={`btn-user-menu ${o.red ? "red" : ""}`}
                        >
                           {o.label}
                        </button>
                     )}
                  </li>
               ))}
            </ul>
         </div>
      </CSSTransition>
   )
}

export default OverlayMenu
