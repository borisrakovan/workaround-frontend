import React from "react"
import { Redirect, Route, RouteProps, useLocation } from "react-router"
import LoadingSpinner from "../components/LoadingSpinner"
import { useAuthContext } from "../context/AuthContext"
import BaseLayout from "../layout/BaseLayout"

const PrivateRoute = (props: RouteProps) => {
   const { currentUser, userLoading } = useAuthContext()

   const location = useLocation()

   // if (userLoading) {
   //    return (
   //       <BaseLayout>
   //          <div className="my-10">
   //             <LoadingSpinner size="lg" />
   //          </div>
   //       </BaseLayout>
   //    )
   // } else if (!currentUser) {
   //    return (
   //       <Redirect
   //          to={`/login?redirect=${location.pathname}${location.search}&flash=true`}
   //       />
   //    )
   // }
   return (
      <BaseLayout>
         <Route {...props} />
      </BaseLayout>
   )
}

export default PrivateRoute
