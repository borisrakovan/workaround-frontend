import React from "react"
import { FacilityTypeType } from "../types/generated"
import Yard from "@mui/icons-material/Yard"
import Pool from "@mui/icons-material/Pool"
import Parking from "@mui/icons-material/LocalParking"
import Elevator from "@mui/icons-material/Elevator"
import FitnessCenter from "@mui/icons-material/FitnessCenter"
import { Tooltip } from "@mui/material"

interface Props {
   facilityType: FacilityTypeType
}

const FacilityIcon = (props: Props) => {
   const { facilityType } = props

   switch (facilityType.name) {
      case "Pool":
         return (
            <Tooltip title="Pool">
               <Pool />
            </Tooltip>
         )
      case "Garden":
         return (
            <Tooltip title="Garden">
               <Yard />
            </Tooltip>
         )
      case "Lift":
         return (
            <Tooltip title="Lift">
               <Elevator />
            </Tooltip>
         )
      case "Parking":
         return (
            <Tooltip title="Parking">
               <Parking />
            </Tooltip>
         )
      case "Gym":
         return (
            <Tooltip title="Gym">
               <FitnessCenter />
            </Tooltip>
         )
      default:
         return null
   }
}

export default FacilityIcon
