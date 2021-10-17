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
   ListSubheader,
   Box,
   Grid,
} from "@mui/material"
import TypeOfPropertyIcon from "../TypeOfPropertyIcon"
import { useRecommendations } from "../../graphql/queries"
import { useAuthContext } from "../../context/AuthContext"
import DoneOutline from "@mui/icons-material/DoneOutline"
import Groups from "@mui/icons-material/Groups"
import Pets from "@mui/icons-material/Pets"
import FlightLand from "@mui/icons-material/FlightLand"
import DateRange from "@mui/icons-material/DateRange"
import NightLife from "@mui/icons-material/Nightlife"
import {
   PropertyObjectType,
   RecommendationApplicationType,
} from "../../types/generated"
import { useHistory } from "react-router"
import { useAcceptRecommendation } from "../../graphql/mutations"
import LifeStyleIcon from "../LifeStyleIcon"

interface Props {}

const MyApplications = (props: Props) => {
   const { currentUser } = useAuthContext()
   const { data } = useRecommendations({ userId: currentUser?.id || "1" })
   const history = useHistory()

   const { mutate } = useAcceptRecommendation({ userId: currentUser?.id || "1" })

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
                        sx={{ height: 200 }}
                        image={`/img/properties/${application.application.property.photoId}`}
                     />

                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {application.application.property.name}
                        </Typography>
                        <List dense sx={{ overflowY: "auto" }}>
                           {application.application.petFriendly && (
                              <ListItem>
                                 <ListItemIcon>
                                    <Pets />
                                 </ListItemIcon>
                                 <ListItemText primary="Pet Friendly" />
                              </ListItem>
                           )}
                           <ListItem>
                              <ListItemIcon>
                                 <FlightLand />
                              </ListItemIcon>
                              <ListItemText
                                 primary={`Move In: ${application.application.moveInDate}`}
                              />
                           </ListItem>
                           <ListItem>
                              <ListItemIcon>
                                 <DateRange />
                              </ListItemIcon>
                              <ListItemText
                                 primary={`Duration: ${application.application.lengthOfStay}`}
                              />
                           </ListItem>
                           <ListItem>
                              <ListItemIcon>
                                 <NightLife />
                              </ListItemIcon>
                              <ListItemText primary="Life Style" />
                           </ListItem>
                           <List component="div" disablePadding>
                              {application.application.lifestyleTypes.map(
                                 (lifestyle) => (
                                    <ListItem sx={{ pl: 4 }}>
                                       <ListItemIcon>
                                          <LifeStyleIcon lifeStyleType={lifestyle} />
                                       </ListItemIcon>
                                       <ListItemText primary={lifestyle.name} />
                                    </ListItem>
                                 )
                              )}
                           </List>
                           <ListItem>
                              <ListItemIcon>
                                 <Groups />
                              </ListItemIcon>
                              <ListItemText
                                 primary={`Registered people in swap: ${application.recommendation.progress.done}/${application.recommendation.progress.total}`}
                              />
                           </ListItem>
                        </List>
                     </CardContent>
                     <ListItem sx={{ marginTop: 3 }}>
                        <ListItemAvatar>
                           <Avatar>{`${application.application.property.user.firstName[0]}${application.application.property.user.lastName[0]}`}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                           primary={`${application.application.property.user.firstName} ${application.application.property.user.lastName}`}
                        />
                     </ListItem>
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
                           {application.accepted ? (
                              <>
                                 <DoneOutline /> Accepted
                              </>
                           ) : (
                              "Accept"
                           )}
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
