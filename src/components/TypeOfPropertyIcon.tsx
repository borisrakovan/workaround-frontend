import React from "react"
import { PropertyObjectType } from "../types/generated"
import Apartment from "@mui/icons-material/Apartment"
import House from "@mui/icons-material/House"

interface Props {
   property: PropertyObjectType
}

const TypeOfPropertyIcon = (props: Props) => {
   const { property } = props

   if (property.propertyType?.name === "flat") {
      return <Apartment />
   } else if (property.propertyType?.name === "house") {
      return <House />
   } else {
      return null
   }
}

export default TypeOfPropertyIcon
