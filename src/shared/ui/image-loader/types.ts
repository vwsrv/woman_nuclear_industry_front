import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { InputHTMLAttributes, DetailedHTMLProps, Dispatch } from 'react';

export interface typeImageLoaderProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width?: number;
  height?: number;
  setImageData: Dispatch<React.SetStateAction<string>>;
  ImageData: string | StaticImport;
}
