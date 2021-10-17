import React from "react"
import { FacilityTypeType } from "../types/generated"
import Yard from "@mui/icons-material/Yard"
import Pool from "@mui/icons-material/Pool"
import Parking from "@mui/icons-material/LocalParking"
import Elevator from "@mui/icons-material/Elevator"
import FitnessCenter from "@mui/icons-material/FitnessCenter"

interface Props {
   facilityType: FacilityTypeType
}

const FacilityIcon = (props: Props) => {
   const { facilityType } = props

   switch (facilityType.name) {
      case "Pool":
         return <Pool />
      case "Garden":
         return <Yard />
      case "Lift":
         return <Elevator />
      case "Parking":
         return <Parking />
      case "Gym":
         return <FitnessCenter />
      default:
         return null
   }
}

export default FacilityIcon
