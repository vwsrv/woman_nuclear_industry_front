import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IMissionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  text: string;
  bgImage: StaticImageData;
  counters: {
    value: string;
    label: string;
  }[];
}
