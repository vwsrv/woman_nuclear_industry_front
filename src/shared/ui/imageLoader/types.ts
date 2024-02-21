import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeImageLoaderProps
  extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > {
  width?: number;
  height?: number;
}

