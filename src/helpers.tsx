export const backendDateStringToDate = (str: string) => {
   const arr = str.split(/[-+ :T]/).map((s) => +s)
   const date = new Date()
   date.setUTCFullYear(arr[0])
   date.setUTCMonth(arr[1] - 1)
   date.setUTCDate(arr[2])
   date.setUTCHours(arr[3])
   date.setUTCMinutes(arr[4])
   date.setUTCSeconds(arr[5])
   return date
}
export const backendDateStringToLocalFormat = (str: string, ommitYear?: boolean) => {
   const date = backendDateStringToDate(str)
   return dateToLocalFormat(date, ommitYear)
}

export const dateToLocalFormat = (date: Date, ommitYear?: boolean) =>
   `${date.getDate()}. ${date.getMonth() + 1}. ${
      ommitYear ? "" : `${date.getFullYear()}`
   }`
