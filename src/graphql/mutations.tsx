import { gql } from "@apollo/client"
// import { ME_FIELDS } from "./fragments"

export const LOGIN = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         me {
            id
         }
      }
   }
`
