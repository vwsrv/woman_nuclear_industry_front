import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface ImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface INewsGalleryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: ImageType[];
}
