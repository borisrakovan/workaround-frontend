import { useMutation } from "@apollo/client"
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import { LOGIN } from "../graphql/mutations"
import { UserType } from "../types/generated"

interface AuthContextType {
   currentUser: UserType | null
   userLoading: boolean
   login: (email: string, password: string, delay: number) => Promise<any>
   logout: () => void
}

const AuthContext = React.createContext<AuthContextType>({
   // only used when there is no provider up the component tree (shouldn't  happen)
   currentUser: null,
   userLoading: true,
   login: () => Promise.reject(),
   logout: () => {},
})

// Login context providing user object and it's setter
// https://www.digitalocean.com/community/tutorials/react-manage-user-login-react-context
const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
   const [currentUser, setCurrentUser] = useState<UserType | null>(null)
   const [userLoading, setUserLoading] = useState(false)
   // refreshToken mutation returns token and user only if the JWT HTTP-only cookie is set
   // (the user logged during previous sessions)

   const [loginMutation] = useMutation<{ login: any }>(LOGIN)

   const login = (email: string, password: string, delay: number) =>
      loginMutation({ variables: { email, password } }).then(({ data }) => {
         if (data?.login) {
            setTimeout(() => {
               setCurrentUser(data.login.me)
            }, delay)
         } else {
            return Promise.reject("API response does not contain any user")
         }
         setUserLoading(false)
      })

   const logout = () => setCurrentUser(null)

   // useEffect(() => {
   //    // call refresh on initial app load
   //    refreshUser().finally(() => {
   //       setUserLoading(false)
   //    })
   // }, [])

   return (
      <AuthContext.Provider value={{ currentUser, userLoading, login, logout }}>
         {children}
      </AuthContext.Provider>
   )
}

// only a shortcut
export const useAuthContext = () => useContext<AuthContextType>(AuthContext)
export const useLoginRequired = (fn: any) => {
   const { currentUser } = useAuthContext()
   const history = useHistory()
   const location = useLocation()

   if (!currentUser) {
      return () => {
         const redirectTo = `/login?redirect=${location.pathname}${location.search}&flash=true`
         history.push(redirectTo)
         return Promise.reject()
      }
   }

   return fn
}

export default AuthContextProvider
