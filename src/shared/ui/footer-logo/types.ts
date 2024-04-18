import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFooterLogoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  copyrightText: string;
  copyrightYear: number;
}
