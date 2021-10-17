import { CssBaseline } from "@mui/material"
import React from "react"
import { Route, Switch } from "react-router"
import ApplyScreen from "./components/apply/ApplyScreen"
import AboutUs from "./components/AboutUs"
import MyApplications from "./components/applications/MyApplications"
import Home from "./components/home/Home"
import { LoginScreen } from "./components/LoginScreen"
import MapScreen from "./components/MapScreen"
import MapLayout from "./layout/MapLayout"
import PlainLayout from "./layout/PlainLayout"
import PrivateRoute from "./routes/PrivateRoute"
import PublicRoute from "./routes/PublicRoute"
import MyProperty from "./components/applications/MyProperty"

function App() {
   return (
      <div className="App">
         <CssBaseline />
         <Switch>
            <PublicRoute path="/about">
               <AboutUs />
            </PublicRoute>
            <PublicRoute path="/login">
               <LoginScreen />
            </PublicRoute>
            <PrivateRoute path="/apply">
               <ApplyScreen />
            </PrivateRoute>
            <PrivateRoute path="/my-property">
               <MyProperty />
            </PrivateRoute>
            <PrivateRoute path="/my-recommendations">
               <MyApplications />
            </PrivateRoute>
            <Route exact path="/">
               <PlainLayout>
                  <Home />
               </PlainLayout>
            </Route>
            <Route exact path="/explore">
               <MapLayout>
                  <MapScreen />
               </MapLayout>
            </Route>
         </Switch>
      </div>
   )
}

export default App
