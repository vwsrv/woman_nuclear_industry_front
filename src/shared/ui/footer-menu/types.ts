import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface FooterMenuItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  link: string;
}

export interface FooterMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  footerItem: FooterMenuItemProps[];
}
