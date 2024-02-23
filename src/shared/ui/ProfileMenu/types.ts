import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeProfileMenuProps {
  id: number;
  title: string;
  link: string;
}

export interface typeProfileMenuPropsArray
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  titleProps: typeProfileMenuProps[];
}
