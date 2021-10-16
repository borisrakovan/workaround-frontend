import React, { useEffect, useMemo, useRef, useState } from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"

interface Props {
   markerCoords?: number[]
   onMarkerMove: (newCoords: number[]) => void
}

const MapInput = (props: Props) => {
   const { markerCoords, onMarkerMove } = props

   const [map, setMap] = useState<any>(undefined)
   const markerRef = useRef(null)
   const eventHandlers = useMemo(
      () => ({
         dragend() {
            const marker = markerRef.current
            if (marker != null) {
               onMarkerMove([
                  (marker as any).getLatLng().lat,
                  (marker as any).getLatLng().lng,
               ])
            }
         },
      }),
      []
   )

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
         if (map) {
            map.setView([position.coords.latitude, position.coords.longitude], 13)
            onMarkerMove([position.coords.latitude, position.coords.longitude])
         }
      })
   }, [map])

   return (
      <MapContainer
         zoom={13}
         scrollWheelZoom={false}
         center={[10, 10]}
         whenCreated={setMap}
      >
         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

         {markerCoords && (
            <Marker
               ref={markerRef}
               position={[markerCoords[0], markerCoords[1]]}
               eventHandlers={eventHandlers}
               draggable={true}
            />
         )}
      </MapContainer>
   )
}

export default MapInput
