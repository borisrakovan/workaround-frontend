import { SelectOption } from "./types"

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

export const asOptionsWithNameAndInfo = (
   data: any[],
   getInfo: (option: any) => string
): SelectOption[] =>
   data.map((d) => ({
      label: d.name,
      value: d.id,
      info: getInfo(d),
   }))

export const asOptionsWithName = (data: any[]): SelectOption[] =>
   data.map((d) => ({
      label: d.name,
      value: d.id,
   }))

export const serializeTypeArray = (
   arr: { id: string; name: string }[],
   title: string
) => arr.map((o) => ({ ...o, value: `${title}_${o.id}` }))

export const deserializeTypeArray = (values: any, title: string) => {
   return Object.entries(values)
      .filter(([k, v]) => k.startsWith(title))
      .filter(([k, v]) => v)
      .map(([k, v]) => k.split("_")[1])
}

export function getRandomInt(max: number) {
   return Math.floor(Math.random() * max)
}
