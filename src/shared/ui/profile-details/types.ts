import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface profileDetailsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageUrl: StaticImageData;
  name: string;
  description?: string | string[];
  profileAbout: React.ReactNode | JSX.Element;
}
