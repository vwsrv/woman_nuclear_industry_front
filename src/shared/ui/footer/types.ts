import { typeFooterMenuPropsTitle } from '@/shared/ui/footer-menu/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface footerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  copyright: {
    text: string;
    year: number;
  };
  items: typeFooterMenuPropsTitle[][];
  contacts: {
    address: string;
    email: string;
  };
}
