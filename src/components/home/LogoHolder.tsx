import React from "react"
import LogoCoursera from "../../assets/coursera.svg"
import LogoNeftlix from "../../assets/netflix.svg"
import LogoFb from "../../assets/fb.svg"
import LogoAirbnb from "../../assets/Airbnb.svg"

interface Props {}

const LogoHolder = (props: Props) => {
   return (
      <>
         <p className="light text-center text-base">
            Companies that <strong>support us</strong>
         </p>
         <div className="flex justify-center items-center my-2 logos-holder flex-wrap">
            <div className="mx-4">
               <img src={LogoNeftlix} alt="netflix" width="100" />
            </div>
            <div className="mx-4">
               <img src={LogoCoursera} alt="coursera" />
            </div>
            <div className="mx-4">
               <img src={LogoFb} alt="fb" width="140" />
            </div>
            <div className="mx-4">
               <img src={LogoAirbnb} alt="airbnb" width="100" />
            </div>
            <span className="text-xl flex items-center lg:hidden md:flex">
               &amp; others
            </span>
         </div>
      </>
   )
}

export default React.memo(LogoHolder)
