export interface SelectOption {
   label: string
   // value: string | number
   value: string
   info?: string
}
export interface OverlayMenuOption {
   label: string
   linkTo?: string
   href?: string
   onClick?: () => void
   red?: boolean
   render?: (option: OverlayMenuOption) => JSX.Element
}
