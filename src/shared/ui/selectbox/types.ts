import { SelectHTMLAttributes, DetailedHTMLProps } from 'react';

export interface Option {
  value: string;
  label: string;
}

export interface typeSelectBoxProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  variant?: 'violet' | 'white' | 'blue';
  options: Option[];
}
