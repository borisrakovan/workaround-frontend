import { useEffect, useState } from "react"
import { PropertyType } from "../types/generated"
import Map from "./Map"
// import { divIcon } from "leaflet"
import PropertyCard from "./PropertyCard"

interface Props {}

const MapScreen = (props: Props) => {
   const [map, setMap] = useState<any>(null)
   const [selectedProperty, setSelectedProperty] = useState<PropertyType | undefined>(
      undefined
   )

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
         if (map) {
            map.setView([position.coords.latitude, position.coords.longitude], 13)
         }
      })
   }, [map])

   // const customMarkerIcon = divIcon({
   //    html: '<img width="30px" src="/img/map-marker.svg"/>',
   // })

   return (
      <div style={{ width: "100vw", height: "100vh" }}>
         <Map whenCreated={setMap} />
         <div className="absolute top-10 right-10 z-10 flex">
            <PropertyCard property={selectedProperty} />
         </div>
      </div>
   )
}

export default MapScreen
