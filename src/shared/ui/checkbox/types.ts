import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface ITypeCheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  textSize?: 'm' | 'l';
  label?: string;
  children?: ReactNode;
}