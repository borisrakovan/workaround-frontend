import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { BACKEND_URL } from "./urls"

import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const client = new ApolloClient({
   // uri: "http://localhost:8000/graphql/",
   uri: `${BACKEND_URL}/graphql/`,
   cache: new InMemoryCache({
      // this is for the inline fragments in queries to work
      // see https://www.apollographql.com/docs/react/data/fragments/#defining-possibletypes-manually
      // this solves a weird bug when the BE returns objects with non unique ids (can happen when fetching collection materials for example)
      // see https://stackoverflow.com/questions/48840223/apollo-duplicates-first-result-to-every-node-in-array-of-edges
   }),
   // following setting allows sending cookies with each request
   // https://www.apollographql.com/docs/react/networking/authentication/#cookie
   credentials: "include",
})

const theme = createTheme({
   palette: {
      primary: {
         main: "#2D3142", // dark blue
      },
      secondary: {
         main: "#4F5D75", // light blue
      },
      info: {
         main: "#BFC0C0", // gray
      },
      success: {
         main: "#EF8354", // orange
      },
   },
   typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
   },
})

ReactDOM.render(
   <ApolloProvider client={client}>
      <React.StrictMode>
         <BrowserRouter>
            <ThemeProvider theme={theme}>
               <App />
            </ThemeProvider>
         </BrowserRouter>
      </React.StrictMode>
   </ApolloProvider>,
   document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
