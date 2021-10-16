import { gql, useQuery } from "@apollo/client"
import { PropertyType } from "../types/generated"

const PROPERTIES = gql`
   query closestPropertiesp {
      closestProperties {
         id
         user {
            id
         }
         usdWorth
         distance
         coordinates
      }
   }
`

export const useProperties = () =>
   useQuery<{ closestProperties: PropertyType[] }>(PROPERTIES)
