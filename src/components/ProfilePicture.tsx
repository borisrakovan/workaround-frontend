import React, { useState } from "react"

// import { UserType } from "../types/generated"
import FallbackImg from "../assets/user_no_pic.png"
// import { STATIC_FILES_URL } from "../urls"

interface Props {
   user: any
   size: number
}

const ProfilePicture = (props: Props) => {
   const { user, size } = props

   const [errored, setErrored] = useState(false)

   const getDimensionClasses = () => {
      if (size === 9) {
         return ["w-9", "h-9"]
      } else if (size === 11) {
         return ["w-11", "h-11"]
      } else if (size === 12) {
         return ["w-12", "h-12"]
      } else {
         return ["w-13", "h-13"]
      }
   }

   return user.profilePic ? (
      <></>
   ) : (
      // <img
      //    src={`${STATIC_FILES_URL}/user_profile_pic/thumb/${user.profilePic}`}
      //    className={`${getDimensionClasses()[0]} ${
      //       getDimensionClasses()[1]
      //    } rounded-full inline-block object-cover`}
      //    onError={(e: any) => {
      //       if (!errored) {
      //          setErrored(true)
      //          e.target.onerror = null
      //          e.target.src = FallbackImg
      //       }
      //    }}
      // />
      <img
         src={FallbackImg}
         className={`${getDimensionClasses()[0]} ${
            getDimensionClasses()[1]
         } rounded-full inline-block`}
         alt="profilepic"
      />
   )
}

export default ProfilePicture
