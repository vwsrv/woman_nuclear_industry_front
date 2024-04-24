import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface typeProfileFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  userInfo: {
    logo?: string;
    name: string;
    address: string;
    dateOfBirth: Date;
  };
  // label?: string;
  // name?: string;
  // value: string;
  // handleInputChange: (newValue: string) => void;
  // type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date';
}
