import { Formik, Form } from "formik"
import React from "react"
import { useAuthContext } from "../../context/AuthContext"
import { CityType } from "../../types/generated"
import CheckboxGroup from "../apply/CheckboxGroup"
import CheckboxFormControl from "../forms/CheckboxFormControl"
import DateFormControl from "../forms/DateFormControl"
import InputFormControl from "../forms/InputFormControl"
import ObjectSelectionFormControl from "../forms/ObjectSelectionFormControl"
import SelectFormControl from "../forms/SelectFormControl"

interface Props {}

interface PropertyValues {
   name: string
   lifestyleTypes: any[]
   propertyType: any
   facilityTypes: any[]
   metersSq: number
   roomType: any
   price: number
   coordinates: any
}

const MyProperty = (props: Props) => {
   const { currentUser } = useAuthContext()

   // const initialValues : PropertyValues = {
   //    name: ""
   //    lifestyleTypes: [],
   //    propertyType: null,
   //    facilityTypes: any[]
   //    metersSq: number
   //    roomType: any
   //    price: number
   //    coordinates: any

   // }
   return <div></div>
}

export default MyProperty
