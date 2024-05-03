import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface typeFooterMenuPropsTitle
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  link: string;
}

export interface FooterMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menuItems: typeFooterMenuPropsTitle[][];
}
