import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeFooterContactsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  address: string;
  email: string;
}
