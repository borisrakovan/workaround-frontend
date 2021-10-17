import {
   useCommuteTypes,
   useFacilityTypes,
   useLengthsOfStay,
   useLifestyleTypes,
   usePropertyTypes,
   useRoomTypes,
} from "../graphql/queries"

export const getLengthOfStayLabel = (months: number) => {
   if (months == 3) return "3 months"
   if (months == 6) return "6 months"
   if (months == 12) return "1 year"
   if (months == 24) return "2 years"
}

export const usePropertyParameters = () => {
   const { data: lifeStyleTypesData } = useLifestyleTypes()
   const { data: facilityTypesData } = useFacilityTypes()
   const { data: lengthsOfStayData } = useLengthsOfStay()
   const { data: roomTypesData } = useRoomTypes()
   const { data: propertyTypesData } = usePropertyTypes()
   const { data: commuteTypesData } = useCommuteTypes()

   const allLoaded =
      lifeStyleTypesData &&
      facilityTypesData &&
      lengthsOfStayData &&
      roomTypesData &&
      propertyTypesData &&
      commuteTypesData

   return {
      lifeStyleTypes: lifeStyleTypesData?.lifestyleTypes || [],
      facilityTypes: facilityTypesData?.facilityTypes || [],
      lengthsOfStay: lengthsOfStayData?.lengthsOfStay || [],
      lengthsOfStayOptions:
         lengthsOfStayData?.lengthsOfStay.map((l) => ({
            value: l,
            label: getLengthOfStayLabel(l) as any,
         })) || [],
      roomTypes: roomTypesData?.roomTypes || [],
      propertyTypes: propertyTypesData?.propertyTypes || [],
      commuteTypes: commuteTypesData?.commuteTypes || [],
      allLoaded,
   }
}
