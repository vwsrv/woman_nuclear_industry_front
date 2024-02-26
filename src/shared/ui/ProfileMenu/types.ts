import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeProfileMenuPropsTitle {
  id: number;
  title: string;
  link: string;
}

export interface typeProfileMenuProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  titleProps: typeProfileMenuPropsTitle[];
}
