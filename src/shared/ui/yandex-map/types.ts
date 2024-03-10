import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface yandexMapProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>, HTMLDivElement
> {
  location: {
    latitude: number
    longitude: number
  }
}
