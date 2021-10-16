import {
   Card,
   CardMedia,
   Typography,
   CardContent,
   CardActions,
   Button,
   Skeleton,
} from "@mui/material"
import { PropertyType } from "../types/generated"

interface Props {
   property?: PropertyType
}

const PropertyCard = (props: Props) => {
   const { property } = props
   if (!property) {
      return (
         <Card sx={{ maxWidth: 345, maxHeight: "95vh" }}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <CardContent>
               <Skeleton />
               <Skeleton width="60%" />
            </CardContent>
            <CardActions>
               <Button size="small">Close</Button>
            </CardActions>
         </Card>
      )
   } else {
      return (
         <Card sx={{ maxWidth: 345, maxHeight: "95vh" }}>
            <CardMedia
               component="img"
               height="140"
               image="/img/hubpraha-d10-intro.jpg"
               alt="green iguana"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {property.id}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {property.user}
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">Close</Button>
            </CardActions>
         </Card>
      )
   }
}

export default PropertyCard
