import React from "react"
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
   Box,
   Grid,
} from "@mui/material"
import TypeOfPropertyIcon from "../TypeOfPropertyIcon"
import { useRecommendations } from "../../graphql/queries"
import { useAuthContext } from "../../context/AuthContext"
import Map from "@mui/icons-material/Map"
import {
   PropertyObjectType,
   RecommendationApplicationType,
} from "../../types/generated"
import { useHistory } from "react-router"
import { useAcceptRecommendation } from "../../graphql/mutations"

interface Props {}

const MyApplications = (props: Props) => {
   const { currentUser } = useAuthContext()
   const { data } = useRecommendations({ userId: currentUser?.id || "1" })
   const history = useHistory()

   const { mutate } = useAcceptRecommendation()

   const handleFindOnMap = (property: PropertyObjectType) => {
      const params = new URLSearchParams()
      params.append("propertyId", property.id)
      history.push({ pathname: "/explore", search: params.toString() })
   }

   const handleAccept = (
      recommendationApplication: RecommendationApplicationType
   ) => {
      mutate({
         variables: { recommendationApplicationId: recommendationApplication.id },
      })
   }

   return (
      <div>
         <h1>My Recommendations</h1>
         <Grid container spacing={2}>
            {data?.recommendedApplications.map((application) => (
               <Grid item xs={4}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardMedia
                        component="img"
                        sx={{ width: 345 }}
                        image={`/img/properties/${application.application.property.photoId}`}
                     />

                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {application.application.property.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Lizards are a widespread group of squamate reptiles, with
                           over 6,000 species, ranging across all continents except
                           Antarctica
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button
                           color="success"
                           variant="text"
                           onClick={() =>
                              handleFindOnMap(application.application.property)
                           }
                        >
                           Find on Map
                        </Button>
                        <Button
                           color="success"
                           variant="contained"
                           disabled={application.accepted}
                           onClick={() => handleAccept(application)}
                        >
                           Accept
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </div>
   )
}

export default MyApplications
