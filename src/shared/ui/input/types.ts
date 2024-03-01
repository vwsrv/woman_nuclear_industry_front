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
  variant?: 'inline' | 'topside';
  label?: string;
  required?: boolean;
  iconRight?: string;
  iconLeft?: string;
  // name?: string;
  // type?: string;
  value?: string;
  // setValue: Dispatch<SetStateAction<string>>;
}
