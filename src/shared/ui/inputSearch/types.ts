import {
  InputHTMLAttributes,
  DetailedHTMLProps,
  // Dispatch,
  // SetStateAction,
} from 'react';

export interface typeInputSearchProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  // onChange: React.ChangeEventHandler<HTMLInputElement>;
  // handleInputChange: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: (text: string) => void;
  handleForm: (text: string) => void;
  // handleForm: () => void;
}
