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
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string>>;
  focus: boolean;
  setFocus: Dispatch<SetStateAction<boolean>>;
}
