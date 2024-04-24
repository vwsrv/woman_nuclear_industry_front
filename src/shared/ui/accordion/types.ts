import { inter } from '@/app/fonts/fonts';
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface typeAccordionItem
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode | JSX.Element;
  title: string;
}

export interface typeAccordionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  contentList: typeAccordionItem[];
}

export interface typeAccordionItemWithState extends typeAccordionItem {
  isOpen: boolean;
}

export type typeAccordionItemWithStateArray = typeAccordionItemWithState[];
