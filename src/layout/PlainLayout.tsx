import React from "react"
import Footer from "./Footer"
import Header from "./Header"

interface Props {
   children: JSX.Element
}
const PlainLayout = (props: Props) => {
   const { children } = props

   return (
      <>
         <Header />
         <div className="site-content flex-1">{children}</div>
         <Footer />
      </>
   )
}

export default PlainLayout
