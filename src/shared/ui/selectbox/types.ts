import { SelectHTMLAttributes, DetailedHTMLProps } from 'react';

export interface Option {
  name: string;
  value: string;
  label: string;
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
