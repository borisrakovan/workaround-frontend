import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { PropertyType } from "../types/generated"

interface Props {
   whenCreated: any
   displayedProperties?: PropertyType[]
   onMarkerClick: (property: PropertyType) => void
}

const Map = (props: Props) => {
   const { whenCreated, displayedProperties } = props

   return (
      <div className="z-0 w-full h-full relative">
         <MapContainer
            zoom={13}
            scrollWheelZoom={false}
            center={[10, 10]}
            whenCreated={whenCreated}
         >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {displayedProperties?.map((property) => (
               <Marker
                  position={[
                     (property.coordinates as any).coordinates[0],
                     (property.coordinates as any).coordinates[1],
                  ]}
               />
            ))}
         </MapContainer>
      </div>
   )
}

export default Map
