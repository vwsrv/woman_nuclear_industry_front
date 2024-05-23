import { StaticImageData } from 'next/image';

export type typePersonCardProps = {
  id?: number;
  imageUrl: string | StaticImageData;
  name: string;
  description?: string;
  handler: ((id: number) => void) | (() => void) | string;
};
