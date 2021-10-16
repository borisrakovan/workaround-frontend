import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"
import React from "react"
import { Link } from "react-router-dom"
import WorkaroundLogo from "../../WorkaroundLogo"
import LogoHolder from "./LogoHolder"

interface Props {}

const Home = (props: Props) => {
   return (
      <div className="">
         <section
            id="landing"
            className="pt-64 xl:pt-32 md:pt-28 pb-16 md:pb-10 xs:pt-14 xs:pb-6 relative"
         >
            {/* <img
               src={Learnie}
               alt="landing" 
               style={{ width: "30%" }}
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
               <LogoHolder />
            </div>
         </section>
         <section id="trending" className="py-16 bg-gradient-to-r from-gray to-white">
            <div className="container">
               <div className="row">
                  <div className="col-span-6 col-start-4 lg:col-span-8 lg:col-start-3 md:col-span-12 md:col-start-1">
                     <h3 className="mb-3 text-center">Trending Properties</h3>
                  </div>
               </div>
            </div>
         </section>
         <section id="trending" className="py-16">
            <div className="container">
               <div className="row">
                  <div className="col-span-6 col-start-4 lg:col-span-8 lg:col-start-3 md:col-span-12 md:col-start-1">
                     <h3 className="mb-3 text-center">Explore</h3>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Home
