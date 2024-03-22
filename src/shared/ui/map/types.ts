import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface mapProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  coordinats: {
    lat: number;
    lng: number;
  },
  controls: boolean
}
