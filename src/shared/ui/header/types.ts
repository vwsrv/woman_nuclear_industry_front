import { StaticImageData } from 'next/image';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface headerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  image: StaticImageData;
  language: string;
  value: string;
  handleInputChange: (newValue: string) => void;
  handleForm: () => void;
  isLoggedIn: boolean;
  handleLanguageChange: () => void;
  avatar?: StaticImageData;
  isCartExist?: boolean;
  isPageCart?: boolean;
  isCartFilled?: boolean;
  itemsInCart?: [];
}
