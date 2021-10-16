import { CssBaseline } from "@mui/material"
import React from "react"
import { Route, Switch } from "react-router"
import Home from "./components/home/Home"
import MapScreen from "./components/MapScreen"
import MapLayout from "./layout/MapLayout"
import PlainLayout from "./layout/PlainLayout"

function App() {
   return (
      <div className="App">
         <CssBaseline />
         <Switch>
            <Route exact path="/">
               <PlainLayout>
                  <Home />
               </PlainLayout>
            </Route>
            <Route exact path="/map">
               <MapLayout>
                  <MapScreen />
               </MapLayout>
            </Route>
         </Switch>
      </div>
   )
}

export default App
