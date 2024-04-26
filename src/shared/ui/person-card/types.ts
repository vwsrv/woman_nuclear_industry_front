import { StaticImageData } from 'next/image';

export type typePersonCardProps = {
  imageUrl: string | StaticImageData;
  name: string;
  description?: string;
  handler: (() => void) | string;
};
