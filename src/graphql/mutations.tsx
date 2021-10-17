import {
   DocumentNode,
   gql,
   MutationHookOptions,
   TypedDocumentNode,
   useMutation,
} from "@apollo/client"
import { ApplicationType, createApplicationArgs } from "../types/generated"
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
      ) {
         createdApplication {
            id
         }
      }
   }
`

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
