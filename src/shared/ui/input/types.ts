import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface typeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name?: string;
  value: string;
  handleInputChange: (newValue: string) => void;
  type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date';
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}
