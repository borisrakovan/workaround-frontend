import { CssBaseline } from "@mui/material"
import React from "react"
import { Route, Switch } from "react-router"
import Home from "./components/Home"
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
         </Switch>
      </div>
   )
}

export default App
