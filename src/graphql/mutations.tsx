import {
   DocumentNode,
   gql,
   MutationHookOptions,
   TypedDocumentNode,
   useMutation,
} from "@apollo/client"
import {
   ApplicationType,
   createApplicationArgs,
   createPropertyArgs,
   PropertyObjectType,
   AcceptRecommendation,
   acceptRecommendationArgs,
} from "../types/generated"
// import { ME_FIELDS } from "./fragments"

export const useTypeSafeMutation = <TData, TVariables>(
   mutation: DocumentNode | TypedDocumentNode<TData, TVariables>,
   options?: MutationHookOptions<TData, TVariables> | undefined
) => {
   const [mutate, { data, loading, error, called }] = useMutation<TData, TVariables>(
      mutation,
      options
   )
   return { mutate, data, loading, error, called }
}
export const LOGIN = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         me {
            id
            username
            firstName
            lastName
            email
            properties {
               id
               user {
                  id
               }
               usdWorth
               photoId
               distance
               coordinates {
                  x
                  y
               }
            }
         }
      }
   }
`

// export interface createApplicationArgs {
//    commuteTypesIds: string[]
//    facilityTypesIds: string[]
//    lengthOfStay: number
//    lifestyleTypesIds: string[]
//    moveInDate: undefined
//    petFriendly: boolean
//    preferredCitiesIds: string[]
//    propertyId: string
//    propertyTypesIds: string[]
// }

export const CREATE_APPLICATION = gql`
   mutation createApplication(
      $commuteTypesIds: [ID!]!
      $facilityTypesIds: [ID!]!
      $lifestyleTypesIds: [ID!]!
      $preferredCitiesIds: [ID!]!
      $lengthOfStay: Int!
      $moveInDate: String!
      $propertyId: ID!
      $petFriendly: Boolean!
      $propertyTypesIds: [ID!]!
   ) {
      createApplication(
         commuteTypesIds: $commuteTypesIds
         facilityTypesIds: $facilityTypesIds
         lifestyleTypesIds: $lifestyleTypesIds
         preferredCitiesIds: $preferredCitiesIds
         lengthOfStay: $lengthOfStay
         moveInDate: $moveInDate
         propertyId: $propertyId
         petFriendly: $petFriendly
         propertyTypesIds: $propertyTypesIds
      ) {
         createdApplication {
            id
         }
      }
   }
`

export const CREATE_PROPERTY = gql`
   mutation createProperty(
      $coordinates: PointInputType!
      $facilityTypeIds: [ID!]!
      $lifestyleTypeIds: [ID!]!
      $propertyTypeId: ID!
      $metersSquared: Int!
      $name: String!
      $description: String
      $photoId: String!
      $roomType: String!
      $usdWorth: Float!
      $userId: ID!
   ) {
      createProperty(
         coordinates: $coordinates
         facilityTypeIds: $facilityTypeIds
         lifestyleTypeIds: $lifestyleTypeIds
         propertyTypeId: $propertyTypeId
         metersSquared: $metersSquared
         name: $name
         description: $description
         photoId: $photoId
         roomType: $roomType
         usdWorth: $usdWorth
         userId: $userId
      ) {
         createdProperty {
            id
         }
      }
   }
`

const ACCEPT_RECOMMENDATION = gql`
   mutation acceptRecommendation($recommendationApplicationId: ID!) {
      acceptRecommendation(
         recommendationApplicationId: $recommendationApplicationId
      ) {
         success
      }
   }
`

export const useAcceptRecommendation = () =>
   useTypeSafeMutation<AcceptRecommendation, acceptRecommendationArgs>(
      ACCEPT_RECOMMENDATION
   )

export const useCreateApplication = () =>
   useTypeSafeMutation<
      { success: boolean; createdApplication: ApplicationType },
      createApplicationArgs
   >(
      CREATE_APPLICATION
      //    {
      //    refetchQueries: [
      //       {
      //          query: EMPLOYEE_DETAIL,
      //          variables: {
      //             ...refetchVariables,
      //          },
      //       },
      //    ],
      // }
   )

export const useCreateProperty = () =>
   useTypeSafeMutation<
      { success: boolean; createdProperty: PropertyObjectType },
      createPropertyArgs
   >(
      CREATE_PROPERTY
      //    {
      //    refetchQueries: [
      //       {
      //          query: EMPLOYEE_DETAIL,
      //          variables: {
      //             ...refetchVariables,
      //          },
      //       },
      //    ],
      // }
   )
