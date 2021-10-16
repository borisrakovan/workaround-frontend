import { Card, CardActionArea, CardContent, Typography } from "@mui/material"
import { LatLngExpression } from "leaflet"
import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { divIcon } from "leaflet"

interface Props {}

const MapScreen = (props: Props) => {
   const [coords, setCoords] = useState<LatLngExpression>([51.505, -0.09])

   const [map, setMap] = useState<any>(null)

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
         if (map) {
            map.setView([position.coords.latitude, position.coords.longitude], 13)
            setCoords([position.coords.latitude, position.coords.longitude])
            console.log([position.coords.latitude, position.coords.longitude])
         }
      })
   }, [map])

   const customMarkerIcon = divIcon({
      html: '<img width="30px" src="/img/map-marker.svg"/>',
   })

   return (
      <div style={{ width: "100vw", height: "100vh" }}>
         <div style={{ width: "100vw", height: "100vh" }} className="z-0 relative">
            <MapContainer
               zoom={13}
               scrollWheelZoom={false}
               center={[10, 10]}
               whenCreated={setMap}
            >
               <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
               <Marker
                  //    icon={customMarkerIcon}
                  position={[50.0764415, 14.402335]}
               >
                  <Popup>
                     A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
               </Marker>
            </MapContainer>
         </div>
         <div className="absolute top-5 right-10 text-red z-10">
            {" "}
            <Card sx={{ maxWidth: 345, height: "95vh" }}>
               <CardActionArea>
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        Lizard
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over
                        6,000 species, ranging across all continents except Antarctica
                     </Typography>
                  </CardContent>
               </CardActionArea>
            </Card>
         </div>
      </div>
   )
}

export default MapScreen
