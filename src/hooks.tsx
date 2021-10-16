import { MutationHookOptions, TypedDocumentNode, useMutation } from "@apollo/client"
import { DocumentNode } from "graphql"

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
