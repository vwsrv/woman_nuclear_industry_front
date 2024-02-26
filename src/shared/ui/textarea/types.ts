import {
  TextareaHTMLAttributes,
  DetailedHTMLProps,
  SetStateAction,
  Dispatch
} from 'react';

export interface typeTextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
