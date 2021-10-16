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
      <div className="form-control">
         <label className="mb-2 font-bold block">{label}</label>
         <div className="flex items-center justify-between"></div>
         <div className="flex items-center justify-between">
            {!!selectedDate && dateToLocalFormat(selectedDate, false)}
            <button
               type="button"
               className="btn-like-a"
               onClick={() => setShowDatePicker(true)}
            >
               {!!selectedDate ? "Change" : "Choose"}
            </button>
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
