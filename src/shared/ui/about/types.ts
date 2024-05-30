import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IAboutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  text: string;
  links: {
    title: string;
    link: string;
  }[];
}
