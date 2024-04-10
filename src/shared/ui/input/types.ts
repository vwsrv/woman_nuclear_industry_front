import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

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
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}
