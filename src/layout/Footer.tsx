import React from "react"
import { Link } from "react-router-dom"
import WorkaroundLogo from "../WorkaroundLogo"

interface Props {}

const Footer = (props: Props) => {
   return (
      <footer className="site-footer bg-gray-lightest py-6">
         <div className="container">
            <p className="text-sm text-gray">
               &copy;{new Date().getFullYear()} workaround
            </p>
         </div>
      </footer>
   )
}

export default Footer
