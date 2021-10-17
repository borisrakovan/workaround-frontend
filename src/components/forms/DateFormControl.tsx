import React, { useState } from "react"
import { dateToLocalFormat } from "../../helpers"
import DatePicker from "./DatePicker"

interface Props {
   label: string
   selectedDate: Date | null
   setSelectedDate: any
}

const DateFormControl = (props: Props) => {
   const { label, selectedDate, setSelectedDate } = props
   const [showDatePicker, setShowDatePicker] = useState(false)

   const handleChangeDeadline = (date: Date | null) => {
      setShowDatePicker(false)
      setSelectedDate(date)
   }

   return (
      <div className="form-control relative  mb-2 ">
         <div className=" ">
            <div className="mr-2 mb-2">
               <label className="font-bold block">{label}</label>
               <div className="flex items-center justify-between"></div>
            </div>
            <div className="flex items-center ">
               {!!selectedDate && dateToLocalFormat(selectedDate, false)}
               <button
                  type="button"
                  className="btn-like-a ml-2"
                  onClick={() => setShowDatePicker(true)}
               >
                  {!!selectedDate ? "Change" : "Choose"}
               </button>
            </div>
         </div>
         {showDatePicker && (
            <div className="pb-2 absolute top-12 z-50">
               <DatePicker onChange={handleChangeDeadline} value={selectedDate} />
            </div>
         )}
      </div>
   )
}

export default DateFormControl
