import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { PropertyObjectType } from "../types/generated"

interface Props {
   whenCreated: any
   displayedProperties?: PropertyObjectType[]
   onMarkerClick: (property: PropertyObjectType) => void
}

const Map = (props: Props) => {
   const { whenCreated, displayedProperties, onMarkerClick } = props

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
                  eventHandlers={{
                     click: (e) => {
                        onMarkerClick(property)
                     },
                  }}
                  position={[property.coordinates.x, property.coordinates.y]}
               />
            ))}
         </MapContainer>
      </div>
   )
}

export default Map
