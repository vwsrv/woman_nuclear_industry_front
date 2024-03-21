import { SelectHTMLAttributes, ChangeEventHandler } from 'react';

export interface Option {
  value: string;
  label: string;
}

export interface typeSelectBoxProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  variant?: 'violet' | 'white' | 'blue';
  dataList: Option[];
  setValue: (selectedValue: string) => void;
}
