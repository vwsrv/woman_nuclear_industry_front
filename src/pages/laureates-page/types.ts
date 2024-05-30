import { StaticImageData } from 'next/image';

export interface ILaureate {
  id: number;
  fullName: string;
  position: string;
  description: string;
  imageUrl: StaticImageData;
  nomination: string;
  year: string;
}
