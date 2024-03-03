import {
  DetailedHTMLProps,
  InputHTMLAttributes
  // Dispatch,
  // SetStateAction
} from 'react';

export interface typeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  required?: boolean;
  value?: string;
  // setValue: Dispatch<SetStateAction<string>>;
  name?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'date' | 'url' | 'number';
}
