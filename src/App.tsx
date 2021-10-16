import { CssBaseline } from "@mui/material"
import React from "react"
import { Route, Switch } from "react-router"
import ApplyScreen from "./apply/ApplyScreen"
import AboutUs from "./components/AboutUs"
import Home from "./components/home/Home"
import MapScreen from "./components/MapScreen"
import MapLayout from "./layout/MapLayout"
import PlainLayout from "./layout/PlainLayout"
import PrivateRoute from "./routes/PrivateRoute"
import PublicRoute from "./routes/PublicRoute"

function App() {
   return (
      <div className="App">
         <CssBaseline />
         <Switch>
            <PublicRoute path="/about">
               <AboutUs />
            </PublicRoute>
            <PrivateRoute path="/apply">
               <ApplyScreen />
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
