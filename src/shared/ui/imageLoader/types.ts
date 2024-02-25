import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeImageLoaderProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width?: number;
  height?: number;
  setImageData: React.Dispatch<React.SetStateAction<string>>,
  ImageData: string | StaticImport,
}
