import React from "react"
import ReactModal from "react-modal"

ReactModal.setAppElement("#root")

interface Props extends ReactModal.Props {
   children: JSX.Element
   style?: any
}

const Modal = (props: Props) => {
   const { children, style } = props

   return (
      <ReactModal
         onAfterOpen={() => {
            document.body.style.top = `-${window.scrollY}px`
            document.body.style.position = "fixed"
         }}
         onAfterClose={() => {
            const scrollY = document.body.style.top
            document.body.style.position = ""
            document.body.style.top = ""
            window.scrollTo(0, parseInt(scrollY || "0") * -1)
         }}
         {...props}
         style={{ content: style }}
      >
         {children}
      </ReactModal>
   )
}

export default Modal
