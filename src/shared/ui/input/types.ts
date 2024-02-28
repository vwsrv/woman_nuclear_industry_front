import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  // Dispatch,
  // SetStateAction
} from 'react';

export interface typeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: 'search' | 'search_in-category' | 'standart';
  label?: string;
  required?: boolean;
  value?: string;
  name?: string;
  iconRight?: string;
  iconLeft?: string;
  // type?: string;
  // setValue: Dispatch<SetStateAction<string>>;
}
