import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeProfileMenuPropsTitle {
  title: string;
  link: string;
}

export interface typeProfileMenuProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  menuItems: typeProfileMenuPropsTitle[];
}
