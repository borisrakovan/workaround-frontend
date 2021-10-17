import React from "react"
import { PropertyObjectType } from "../types/generated"
import Apartment from "@mui/icons-material/Apartment"
import House from "@mui/icons-material/House"
import { Tooltip } from "@mui/material"

interface Props {
   property: PropertyObjectType
}

const TypeOfPropertyIcon = (props: Props) => {
   const { property } = props

   if (property.propertyType?.name === "flat") {
      return (
         <Tooltip title="Apartment">
            <Apartment />
         </Tooltip>
      )
   } else if (property.propertyType?.name === "house") {
      return (
         <Tooltip title="House">
            <House />
         </Tooltip>
      )
   } else {
      return null
   }
}

export default TypeOfPropertyIcon
