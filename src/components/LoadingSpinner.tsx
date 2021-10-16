import React from "react"
import { ClipLoader } from "react-spinners"

const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("../COPY_tailwind.config.js")
const twConfig = resolveConfig(tailwindConfig)

interface Props {
   size: "xs" | "sm" | "md" | "lg"
   justifyStart?: boolean
   invertColor?: boolean
}

const LoadingSpinner = (props: Props) => {
   const { invertColor } = props
   let size
   switch (props.size) {
      case "xs":
         size = 20
         break
      case "sm":
         size = 26
         break
      case "md":
         size = 36
         break
      case "lg":
         size = 46
         break
   }
   return (
      <div
         className={`flex ${
            props.justifyStart ? "justify-start" : "justify-center"
         } my-2`}
      >
         <ClipLoader
            size={size}
            color={
               invertColor
                  ? twConfig.theme.colors.white
                  : twConfig.theme.colors.cyan.DEFAULT
            }
            loading={true}
         />
      </div>
   )
}

export default LoadingSpinner

// "@appbaseio/reactivesearch": "^3.17.0",
// "@react-hook/window-size": "^3.0.7",
// "date-fns": "^2.17.0",
// "formik": "^2.2.6",
// "lodash": "^4.17.20",
// "qs": "^6.9.6",
// "react-modal": "^3.12.1",
// "react-select": "^4.1.0",
// "react-spinners": "^0.10.4",
// "react-tooltip": "^4.2.17",
// "simplebar-react": "^2.3.0",
// "yup": "^0.32.9"
// "@types/lodash": "^4.14.168",
// "@types/react-modal": "^3.12.0",
// "@types/qs": "^6.9.5",
// "@types/react-collapse": "^5.0.0",
// "@types/react-select": "^4.0.13",
// "@types/react-truncate": "^2.3.3"
