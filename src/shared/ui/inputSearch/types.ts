import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeInputSearchProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  handleInputChange: (newValue: string) => void;
  handleForm: () => void;
}
