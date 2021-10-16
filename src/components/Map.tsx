import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { PropertyType } from "../types/generated"

interface Props {
   whenCreated: any
   displayedProperties?: PropertyType[]
}

const Map = (props: Props) => {
   const { whenCreated } = props

   return (
      <div style={{ width: "100vw", height: "100vh" }} className="z-0 relative">
         <MapContainer
            zoom={13}
            scrollWheelZoom={false}
            center={[10, 10]}
            whenCreated={whenCreated}
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
   )
}

export default Map
