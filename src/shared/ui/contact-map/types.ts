interface coordinats {
  latitude: number
  longitude: number
}

export interface contactMapProps {
  address: string;
  buisnessHours: string;
  email: string;
  coordinats: coordinats
}
