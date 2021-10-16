import React from "react"
import { Route, RouteProps } from "react-router"
import BaseLayout from "../layout/BaseLayout"

const PublicRoute = (props: RouteProps) => {
   return (
      <BaseLayout>
         <Route {...props} />
      </BaseLayout>
   )
}

export default PublicRoute
