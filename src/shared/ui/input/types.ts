import { DetailedHTMLProps, InputHTMLAttributes, Dispatch, SetStateAction } from 'react';

export interface typeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: 'search' | 'standart';
  label?: string;
  required?: boolean;
  value?: string;
  name?: string;
  // setValue: Dispatch<SetStateAction<string>>;
}

