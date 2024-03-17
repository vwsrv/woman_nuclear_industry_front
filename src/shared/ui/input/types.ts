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
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number';
}
