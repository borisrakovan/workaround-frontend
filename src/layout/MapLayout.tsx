import React from "react"
import Header from "./Header"

interface Props {
   children?: React.ReactNode
}

const MapLayout = (props: Props) => {
   const { children } = props
   return (
      <div className="flex flex-col z-0 h-screen">
         {/* <div className="top-0 z> */}
         <Header />
         <div className="flex-grow">{children}</div>
      </div>
   )
}

export default MapLayout
