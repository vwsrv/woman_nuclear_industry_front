import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeImageLoaderProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  width: number;
  height: number;
}
