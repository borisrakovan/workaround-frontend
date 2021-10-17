import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { useProperties, useRecommendations } from "../graphql/queries"
import { PropertyObjectType } from "../types/generated"
import Map from "./Map"
// import { divIcon } from "leaflet"
import PropertyCard from "./PropertyCard"
import qs from "qs"
import LoadingSpinner from "./LoadingSpinner"
import MatchedPropertiesCard from "./MatchedPropertiesCard"
import { useAuthContext } from "../context/AuthContext"

interface Props {}

const MapScreen = (props: Props) => {
   const [map, setMap] = useState<any>(null)
   const { propertyId } = useParams<{ propertyId?: string }>()
   const [selectedProperty, setSelectedProperty] = useState<
      PropertyObjectType | undefined
   >(undefined)

   const history = useHistory()
   const { currentUser } = useAuthContext()
   const { data: recommended } = useRecommendations({
      userId: currentUser?.id || "1",
   })

   const { data, loading } = useProperties()

   const params: any = qs.parse(window.location.search, { ignoreQueryPrefix: true })

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
         if (map) {
            map.setView([position.coords.latitude, position.coords.longitude], 13)
         }
      })
   }, [map])

   useEffect(() => {
      if (data?.closestProperties && map) {
         const propertyToPanTo = data.closestProperties.find((property) => {
            return property.id === params.propertyId
         })

         if (propertyToPanTo) {
            setSelectedProperty(propertyToPanTo)
            setTimeout(
               () =>
                  map.setView(
                     [propertyToPanTo?.coordinates.x, propertyToPanTo?.coordinates.y],
                     15
                  ),
               500
            )
         }
      }
   }, [data, map])

   // const customMarkerIcon = divIcon({
   //    html: '<img width="30px" src="/img/map-marker.svg"/>',
   // })

   const handleMarkerClick = (property: PropertyObjectType) => {
      setSelectedProperty(property)
      const params = new URLSearchParams()
      params.append("propertyId", property.id)
      history.push({ search: params.toString() })
      map.setView([property.coordinates.x, property.coordinates.y], 15)
   }

   const handleClose = () => {
      setSelectedProperty(undefined)
      const params = new URLSearchParams()
      params.delete("propertyId")
      history.push({ search: params.toString() })
   }

   const handleZoom = (propertyToPanTo: PropertyObjectType) => {
      map.setView(
         [propertyToPanTo?.coordinates.x, propertyToPanTo?.coordinates.y],
         15
      )
   }

   return (
      <div className="h-full relative">
         {loading && (
            <div className="h-full w-full absolute z-20 bg-white bg-opacity-80 flex justify-center items-center">
               <LoadingSpinner size="lg" invertColor />
            </div>
         )}
         <Map
            whenCreated={setMap}
            onMarkerClick={handleMarkerClick}
            displayedProperties={data?.closestProperties}
         />
         {selectedProperty && (
            <div className="absolute top-10 right-10 z-10 flex">
               <PropertyCard
                  property={selectedProperty}
                  loading={loading}
                  onClose={handleClose}
                  onZoom={handleZoom}
               />
            </div>
         )}
         {currentUser && (
            <div className="absolute top-28 left-10 z-10">
               <MatchedPropertiesCard
                  matchedProperties={
                     recommended?.recommendedApplications.map(
                        (application) => application.property
                     ) ?? []
                  }
                  onPropertyClick={handleMarkerClick}
                  selectedProperty={selectedProperty}
               />
            </div>
         )}
      </div>
   )
}

export default MapScreen
