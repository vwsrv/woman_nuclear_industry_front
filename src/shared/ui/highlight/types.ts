import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IHighlightProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  children: ReactNode;
  bgImage: StaticImageData;
}
