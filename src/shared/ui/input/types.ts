import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ChangeEventHandler
} from 'react';

export interface typeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name?: string;
  value?: string;
  handleChange: (newValue: string) => void;
  type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date';
}
