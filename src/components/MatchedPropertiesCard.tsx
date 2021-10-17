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
import { PropertyObjectType } from "../types/generated"
import TypeOfPropertyIcon from "./TypeOfPropertyIcon"

interface Props {
   matchedProperties: PropertyObjectType[]
   onPropertyClick?: (clickedProperty: PropertyObjectType) => void
   selectedProperty?: PropertyObjectType
}

const MatchedPropertiesCard = (props: Props) => {
   const { matchedProperties, selectedProperty, onPropertyClick } = props
   const history = useHistory()

   const handleClick = () => {
      history.push({ pathname: "/my-applications" })
   }
   return (
      <Card
         sx={{ width: 345, maxHeight: "95vh" }}
         className="flex flex-col justify-between"
      >
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               Recommended for you
            </Typography>

            <List>
               {matchedProperties.map((property) => (
                  <ListItemButton
                     onClick={() => onPropertyClick?.(property)}
                     selected={selectedProperty?.id === property.id}
                  >
                     <ListItemIcon>
                        <TypeOfPropertyIcon property={property} />
                     </ListItemIcon>
                     <ListItemText primary={`${property.name} `} />
                  </ListItemButton>
               ))}
            </List>
         </CardContent>
         <CardActions>
            <Button
               color="success"
               variant="contained"
               fullWidth
               onClick={handleClick}
            >
               Go to My Applications
            </Button>
         </CardActions>
      </Card>
   )
}

export default MatchedPropertiesCard
