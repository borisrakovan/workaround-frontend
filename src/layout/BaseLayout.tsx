import React from "react"
import Footer from "./Footer"
import Header from "./Header"
interface Props {
   children: JSX.Element
}

// base layout shared between public and private routes
const BaseLayout = (props: Props) => {
   const { children } = props
   // const { message, setMessage } = useFlashContext()

   return (
      <>
         <Header />
         <div className="site-content flex-1 ">
            <div className="container my-10 ">
               {/* {message && (
                  <div className="my-6">
                     <MutationResultMessage
                        message={message?.message ?? null}
                        isError={message?.error || false}
                        onExited={() => setMessage(null)}
                     />
                  </div>
               )} */}
               {children}
            </div>
         </div>
         <Footer />
      </>
   )
}

export default BaseLayout
