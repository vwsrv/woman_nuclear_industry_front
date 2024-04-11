import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
  UseFormWatch
} from 'react-hook-form';

export interface typeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date';
  registerOptions?: {
    pattern?: RegExp;
    errorMessage?: string;
    required?: boolean;
  };
}
