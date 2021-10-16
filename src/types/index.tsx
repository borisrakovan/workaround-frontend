export interface OverlayMenuOption {
   label: string
   linkTo?: string
   href?: string
   onClick?: () => void
   red?: boolean
   render?: (option: OverlayMenuOption) => JSX.Element
}
