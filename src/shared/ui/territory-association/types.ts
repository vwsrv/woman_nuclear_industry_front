import { StaticImageData } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface region {
  regionName: string;
  coordinats: {
    lat: number;
    lng: number;
  };
}

export interface territoryAssociationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  subtitle: string;
  image: StaticImageData;
  regions: region[];
}
