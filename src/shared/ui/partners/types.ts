import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typePartnersProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  logos: {
    logo: string;
    link?: string;
  }[];
  linkUrl: string;
}
