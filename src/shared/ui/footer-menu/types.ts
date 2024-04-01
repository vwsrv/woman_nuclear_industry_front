import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface typeProfileMenuPropsTitle
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  link: string;
}

export interface FooterMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    menuItems: typeProfileMenuPropsTitle[][];
}
