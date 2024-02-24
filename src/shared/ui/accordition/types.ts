import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface TypeAccorditionProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  title: string;
  onClick: () => void;
}
