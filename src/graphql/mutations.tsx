import { gql } from "@apollo/client"
import { ME_FIELDS } from "./fragments"

export const LOGIN = gql`
   ${ME_FIELDS}
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         me {
            ...MeFields
         }
      }
   }
`
