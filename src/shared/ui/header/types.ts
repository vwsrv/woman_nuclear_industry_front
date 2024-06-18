import { StaticImageData } from 'next/image';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface headerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  image: StaticImageData;
  search?: {
    value: string;
    onChange: () => void;
    onSubmitForm: () => void;
  };
  language?: string;
  isLoggedIn: boolean;
  avatar?: StaticImageData;
  isCartExist?: boolean;
  isPageCart?: boolean;
  isCartFilled?: boolean;
  itemsInCart?: [];
}
