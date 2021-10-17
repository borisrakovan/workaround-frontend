import React from "react"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"

interface Props {
   children: () => JSX.Element
   height: string
}

const FancyScroll = (props: Props) => {
   const { children, height } = props

   return (
      <SimpleBar
         forceVisible="y"
         autoHide={false}
         style={{ width: "100%", ...(height ? { height: height } : {}) }}
      >
         {children()}
      </SimpleBar>
   )
}

export default FancyScroll
