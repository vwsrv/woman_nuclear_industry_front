import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface coordinats {
  lat: number;
  lng: number;
}

export interface contactMapProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  address: string;
  buisnessHours: string;
  email: string;
  coordinats: coordinats;
}
