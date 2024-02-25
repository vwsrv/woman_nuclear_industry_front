import { inter } from '@/app/fonts/fonts';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface AccordionProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode | JSX.Element;
  title: string;
  isOpen: boolean;
}

export type AccordionPropsType = {
  props: AccordionProps[];
};
