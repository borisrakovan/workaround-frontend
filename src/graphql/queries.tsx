import { gql, useQuery } from "@apollo/client"
import {
   FacilityTypeType,
   LifestyleTypeType,
   PropertyObjectType,
} from "../types/generated"

const PROPERTIES = gql`
   query closestProperties {
      closestProperties {
         id
         user {
            id
            firstName
            lastName
         }
         metersSquared
         roomType
         facilityTypes {
            name
         }
         propertyType {
            name
         }
         name
         photoId
         description
         distance
         coordinates {
            x
            y
         }
      }
   }
`

const LIFESTYLE_TYPES = gql`
   query lifestyleTypes {
      lifestyleTypes {
         id
         name
      }
   }
`

const FACILITY_TYPES = gql`
   query facilityTypes {
      facilityTypes {
         id
         name
      }
   }
`

const LENGTHS_OF_STAY = gql`
   query lengthsOfStay {
      lengthsOfStay
   }
`

const ROOM_TYPES = gql`
   query roomTypes {
      roomTypes
   }
`

export const useProperties = () =>
   useQuery<{ closestProperties: PropertyObjectType[] }>(PROPERTIES)

export const useLifestyleTypes = () =>
   useQuery<{ lifestyleTypes: LifestyleTypeType[] }>(LIFESTYLE_TYPES)

export const useFacilityTypes = () =>
   useQuery<{ facilityTypes: FacilityTypeType[] }>(FACILITY_TYPES)

export const useLengthsOfStay = () =>
   useQuery<{ lengthsOfStay: number[] }>(LENGTHS_OF_STAY)

export const useRoomTypes = () => useQuery<{ roomTypes: String[] }>(ROOM_TYPES)
