import {
  InputHTMLAttributes,
  DetailedHTMLProps,
  ChangeEventHandler
} from 'react';

export interface typeInputSearchProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  // variant?: 'violet' | 'blue';
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
