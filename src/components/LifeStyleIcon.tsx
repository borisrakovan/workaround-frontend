import React from "react"
import { FacilityTypeType, LifestyleTypeType } from "../types/generated"
import Nature from "@mui/icons-material/Nature"
import DirectionsBus from "@mui/icons-material/DirectionsBus"
import School from "@mui/icons-material/School"
import SportsBar from "@mui/icons-material/SportsBar"
import FitnessCenter from "@mui/icons-material/FitnessCenter"
import { Tooltip } from "@mui/material"

interface Props {
   lifeStyleType: LifestyleTypeType
}

const LifeStyleIcon = (props: Props) => {
   const { lifeStyleType } = props

   switch (lifeStyleType.name) {
      case "public transport":
         return <DirectionsBus />
      case "schools":
         return <School />
      case "restaurants cafes and bars":
         return <SportsBar />
      case "parks & green spaces":
         return <Nature />
      case "shops & supermarkets":
         return (
            <Tooltip title="Gym">
               <FitnessCenter />
            </Tooltip>
         )
      case "gyms":
         return <FitnessCenter />
      default:
         return null
   }
}

export default LifeStyleIcon
