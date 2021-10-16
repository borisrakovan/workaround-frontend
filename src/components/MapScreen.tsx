import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"

interface Props {}

const MapScreen = (props: Props) => {
   const [coords, setCoords] = useState<number[]>([51.505, -0.09])

   const [map, setMap] = useState<any>(null)

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
         if (map) {
            map.setView([position.coords.latitude, position.coords.longitude], 13)
         }
      })
   }, [map])

   return (
      <div style={{ width: "100vw", height: "100vh" }}>
         <MapContainer
            zoom={13}
            scrollWheelZoom={false}
            center={[10, 10]}
            whenCreated={setMap}
         >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.505, -0.09]}>
               <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
               </Popup>
            </Marker>
         </MapContainer>
      </div>
   )
}

export default MapScreen
