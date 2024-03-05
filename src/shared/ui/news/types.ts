import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NewsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageUrl: string;
  date: string;
  title: string;
  link: string;
}
