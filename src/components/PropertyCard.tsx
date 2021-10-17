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
} from "@mui/material"
import { PropertyObjectType } from "../types/generated"

interface Props {
   property: PropertyObjectType
   loading?: boolean
   onClose?: () => void
}

const PropertyCard = (props: Props) => {
   const { property, loading, onClose } = props
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
         <Card sx={{ width: 345, maxHeight: "95vh" }}>
            <CardMedia
               component="img"
               height="140"
               image={`/img/properties/${property.photoId}`}
               alt="green iguana"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {property.id}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {/* {property.user} */}
               </Typography>
               <List>
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar>JJ</Avatar>
                     </ListItemAvatar>
                     <ListItemText primary="Brunch this weekend?" />
                  </ListItem>
               </List>
            </CardContent>
            <CardActions>
               <Button size="small" onClick={onClose}>
                  Close
               </Button>
            </CardActions>
         </Card>
      )
   }
}

export default PropertyCard
