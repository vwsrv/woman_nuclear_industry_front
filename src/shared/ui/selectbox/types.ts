import { SelectHTMLAttributes, DetailedHTMLProps } from 'react';

export interface Option {
  value: string;
  label: string;
  link?: string;
}

export interface typeSelectBoxProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  variant?: 'violet' | 'white' | 'blue';
  name: string;
  options: Option[];
}
