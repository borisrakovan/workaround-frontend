import {
   Card,
   CardMedia,
   Typography,
   CardContent,
   CardActions,
   Button,
   Skeleton,
   ListItem,
   ListItemAvatar,
   Avatar,
   ListItemText,
   List,
   ListItemIcon,
   Tooltip,
   ListItemButton,
} from "@mui/material"
import React from "react"
import { useHistory } from "react-router"
import { PropertyObjectType, RecommendationApplicationType } from "../types/generated"
import TypeOfPropertyIcon from "./TypeOfPropertyIcon"
import Recommend from "@mui/icons-material/Recommend"
import DoneOutline from "@mui/icons-material/DoneOutline"

interface Props {
   matchedProperties: RecommendationApplicationType[]
   onPropertyClick?: (clickedProperty: PropertyObjectType) => void
   selectedProperty?: PropertyObjectType
}

const MatchedPropertiesCard = (props: Props) => {
   const { matchedProperties, selectedProperty, onPropertyClick } = props
   const history = useHistory()

   const handleClick = () => {
      history.push({ pathname: "/my-recommendations" })
   }
   return (
      <Card
         sx={{ width: 345, maxHeight: "95vh" }}
         className="flex flex-col justify-between"
      >
         <CardContent>
            <Typography
               gutterBottom
               variant="h5"
               component="div"
               className="flex justify-around items-center"
            >
               Recommended for you <Recommend />
            </Typography>
         </CardContent>
         <List dense>
            {matchedProperties.map((application) => (
               <ListItemButton
                  onClick={() => onPropertyClick?.(application.application.property)}
                  selected={
                     selectedProperty?.id === application.application.property.id
                  }
               >
                  <ListItemIcon>
                     <TypeOfPropertyIcon
                        property={application.application.property}
                     />
                  </ListItemIcon>
                  <ListItemText
                     primary={`${application.application.property.name} `}
                  />
                  {application.accepted && (
                     <Tooltip title="You accepted this recommendation!">
                        <DoneOutline />
                     </Tooltip>
                  )}
               </ListItemButton>
            ))}
         </List>

         <CardActions>
            <Button
               color="success"
               variant="contained"
               fullWidth
               onClick={handleClick}
            >
               Go to My Recommendations
            </Button>
         </CardActions>
      </Card>
   )
}

export default MatchedPropertiesCard
