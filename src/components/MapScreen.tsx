import {
   Card,
   CardActionArea,
   CardContent,
   Typography,
   CardMedia,
   CardActions,
   Button,
} from "@mui/material"
import { LatLngExpression } from "leaflet"
import React, { useEffect, useState } from "react"
import Map from "./Map"

import { divIcon } from "leaflet"

interface Props {}

const MapScreen = (props: Props) => {
   const [map, setMap] = useState<any>(null)
   useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
         if (map) {
            map.setView([position.coords.latitude, position.coords.longitude], 13)
         }
      })
   }, [map])

   const customMarkerIcon = divIcon({
      html: '<img width="30px" src="/img/map-marker.svg"/>',
   })

   return (
      <div style={{ width: "100vw", height: "100vh" }}>
         <Map whenCreated={setMap} />
         <div className="absolute top-10 right-10 z-10 flex">
            <Card sx={{ maxWidth: 345, maxHeight: "95vh" }}>
               <CardMedia
                  component="img"
                  height="140"
                  image="/img/hubpraha-d10-intro.jpg"
                  alt="green iguana"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     ImpactHub
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Lizards are a widespread group of squamate reptiles, with over
                     6,000 species, ranging across all continents except Antarctica
                  </Typography>
               </CardContent>
               <CardActions>
                  <Button size="small">Close</Button>
               </CardActions>
            </Card>
         </div>
      </div>
   )
}

export default MapScreen
