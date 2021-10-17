import React from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

interface Props {
   onChange: (deadline: Date | null) => void
   value: Date | null
}

const DatePicker = (props: Props) => {
   const { onChange, value } = props

   const handleChange = (deadline: Date) => {
      // unset the deadline if the user pressed the same date
      const newDeadline =
         value?.toDateString() == deadline.toDateString() ? null : deadline
      onChange(newDeadline)
   }

   return (
      <div className="">
         <Calendar
            className=""
            onChange={handleChange}
            value={value}
            maxDetail="month"
            minDetail="month"
         />
      </div>
   )
}

export default DatePicker
