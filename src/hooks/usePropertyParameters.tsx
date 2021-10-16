import {
   useFacilityTypes,
   useLengthsOfStay,
   useLifestyleTypes,
   useRoomTypes,
} from "../graphql/queries"

export const usePropertyParameters = () => {
   const { data: lifeStyleTypesData } = useLifestyleTypes()
   const { data: facilityTypesData } = useFacilityTypes()
   const { data: lengthsOfStayData } = useLengthsOfStay()
   const { data: roomTypesData } = useRoomTypes()

   return {
      lifeStyleTypes: lifeStyleTypesData?.lifestyleTypes,
      facilityTypes: facilityTypesData?.facilityTypes,
      lengthsOfStay: lengthsOfStayData?.lengthsOfStay,
      roomTypes: roomTypesData?.roomTypes,
   }
}
