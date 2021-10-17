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
import { PropertyObjectType } from "../types/generated"
import WifiIcon from "@mui/icons-material/Wifi"
import Straighten from "@mui/icons-material/SquareFoot"
import Door from "@mui/icons-material/SensorDoor"
import Park from "@mui/icons-material/Park"
import FacilityIcon from "./FacilityIcon"

interface Props {
   property: PropertyObjectType
   loading?: boolean
   onClose?: () => void
   onZoom?: (propertyToZoomTo: PropertyObjectType) => void
}

const PropertyCard = (props: Props) => {
   const { property, loading, onClose, onZoom } = props
   if (loading) {
      return (
         <Card sx={{ width: 345, maxHeight: "95vh" }}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <CardContent>
               <Skeleton />
               <Skeleton width="60%" />
            </CardContent>
            <CardActions>
               <Button size="small" onClick={onClose}>
                  Close
               </Button>
            </CardActions>
         </Card>
      )
   } else {
      return (
         <Card
            sx={{ width: 345, maxHeight: "95vh" }}
            className="flex flex-col justify-between"
         >
            <CardMedia
               component="img"
               height="140"
               image={`/img/properties/${property.photoId}`}
            />

            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {property.name}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {/* {property.user} */}
               </Typography>
               <List>
                  <ListItem>
                     <ListItemIcon>
                        <Straighten />
                     </ListItemIcon>
                     <ListItemText primary={`${property.metersSquared} m²`} />
                  </ListItem>

                  <ListItem>
                     <ListItemIcon>
                        <Door />
                     </ListItemIcon>
                     <ListItemText primary={property.roomType} />
                  </ListItem>

                  {property.facilityTypes.length !== 0 && (
                     <ListItem>
                        <ListItemIcon>
                           <Park />
                        </ListItemIcon>
                        <ListItemText
                           id="switch-list-label-wifi"
                           primary="Amenities"
                        />
                     </ListItem>
                  )}
                  <List component="div" disablePadding>
                     {property.facilityTypes.map((facilityType) => (
                        <ListItem sx={{ pl: 4 }}>
                           <ListItemIcon>
                              <FacilityIcon facilityType={facilityType} />
                           </ListItemIcon>
                           <ListItemText primary={facilityType.name} />
                        </ListItem>
                     ))}
                  </List>
                  <ListItem sx={{ marginTop: 3 }}>
                     <ListItemAvatar>
                        <Avatar>{`${property.user.firstName[0]}${property.user.lastName[0]}`}</Avatar>
                     </ListItemAvatar>
                     <ListItemText
                        primary={`${property.user.firstName} ${property.user.lastName}`}
                     />
                  </ListItem>
               </List>
            </CardContent>

            <CardActions>
               <Button size="small" color="error" onClick={onClose}>
                  Close
               </Button>
               <Button
                  size="small"
                  color="primary"
                  onClick={() => onZoom?.(property)}
               >
                  Zoom
               </Button>
            </CardActions>
         </Card>
      )
   }
}

export default PropertyCard
