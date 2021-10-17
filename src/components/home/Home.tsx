import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useProperties, useRecommendations } from "../../graphql/queries"
import { PropertyObjectType } from "../../types/generated"
import WorkaroundLogo from "../../WorkaroundLogo"
import Map from "../Map"
import PropertyCard from "../PropertyCard"
import LogoHolder from "./LogoHolder"
import { useHistory } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"
import ReactGlobe from "react-globe"

interface Props {}

const Home = (props: Props) => {
   const [map, setMap] = useState<any>(undefined)
   const history = useHistory()

   const { data } = useProperties()

   const handleMarkerClick = (clickedProperty: PropertyObjectType) => {
      const params = new URLSearchParams()
      params.append("propertyId", clickedProperty.id)
      history.push({ pathname: "/explore", search: params.toString() })
   }

   return (
      <div className="">
         <section
            id="landing"
            className="pt-64 xl:pt-32 md:pt-28 pb-16 md:pb-10 xs:pt-14 xs:pb-6 relative"
         >
            {/* <img   routeOnMarkerClick?: boolean
               className="absolute top-24 right-0 md:hidden"
            /> */}
            <div className="container">
               <div className="row">
                  <div className="col-span-8 md:col-span-12">
                     <div className="font-normal text-gray-dark text-5xl md:text-4xl mb-4">
                        Tired of working from home?
                     </div>
                     <div className="text-2xl flex items-center">
                        Level up your home office with
                        <WorkaroundLogo />
                     </div>
                     <p className="text-base md:text-base text-gray py-2">
                        Our platform connects people who are tired of working from the
                        same place many years, letting them temporarily “exchange”
                        properties with others from all around the world.
                     </p>
                     <div className="py-2">
                        <Link to="/apply" className="btn-lg-orange">
                           Apply now
                        </Link>
                     </div>

                     {/* <div className="my-6">
                        <SiteSearchInput
                           showCategories
                           useForm
                           queryParams={{ origin: "home_page" }}
                        />
                     </div> */}
                  </div>
               </div>
               <div className="mt-32 md:mt-20 xs:mt-8"></div>
               <div
                  className="absolute h-full w-full"
                  style={{ right: -700, bottom: 0 }}
               >
                  <ReactGlobe
                     globeBackgroundTexture={null}
                     options={{
                        cameraRotateSpeed: 1,
                        markerTooltipRenderer: (marker) => `${marker.city}`,
                        pointLightColor: "#EF8354",
                     }}
                     markers={data?.closestProperties.map((property) => {
                        return {
                           id: property.id,
                           city: property.name,
                           value: 10,
                           coordinates: [
                              property.coordinates.x,
                              property.coordinates.y,
                           ],
                        }
                     })}
                     width="100%"
                     // onClickMarker={() => alert()}
                  />
               </div>
               <LogoHolder />
            </div>
         </section>
         <section id="trending" className="py-16 bg-gradient-to-r from-gray">
            <div className="container">
               <div className="row">
                  <div className="col-span-6 col-start-4 lg:col-span-8 lg:col-start-3 md:col-span-12 md:col-start-1">
                     <h3 className="mb-3 text-center">Trending Properties</h3>
                  </div>
               </div>
               <div className="flex justify-between mt-4">
                  {data?.closestProperties[0] && (
                     <PropertyCard
                        property={data?.closestProperties[0]}
                        onZoom={handleMarkerClick}
                     />
                  )}
                  {data?.closestProperties[1] && (
                     <PropertyCard
                        property={data?.closestProperties[1]}
                        onZoom={handleMarkerClick}
                     />
                  )}
                  {data?.closestProperties[2] && (
                     <PropertyCard
                        onZoom={handleMarkerClick}
                        property={data?.closestProperties[2]}
                     />
                  )}
               </div>
            </div>
         </section>
         <section id="trending" className="h-96 relative">
            {/* <div className="absolute z-20 w-screen bg-gradient-to-b from-gray pb-10">
               <div className="container">
                  <div className="row">
                     <div className="col-span-6 col-start-4 lg:col-span-8 lg:col-start-3 md:col-span-12 md:col-start-1">
                        <h3 className="mb-3 text-center">Explore</h3>
                     </div>
                  </div>
               </div>
            </div> */}

            <Map
               whenCreated={setMap}
               onMarkerClick={handleMarkerClick}
               defaultZoom={1}
               displayedProperties={data?.closestProperties}
            />
         </section>
      </div>
   )
}

export default Home
