import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface TypeAccorditionProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode | JSX.Element;
  title: string;
  onClick?: () => void;
}
