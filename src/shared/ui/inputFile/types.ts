import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithoutRef,
  RefAttributes
} from 'react';

interface typeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  type?: 'file' | string;
  setImg: React.Dispatch<React.SetStateAction<string | null>>;
  handleFile: (file: File) => void;
}

export type InputProps = PropsWithoutRef<typeInputProps> &
  RefAttributes<HTMLInputElement>;
