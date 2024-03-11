import { ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface ICheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  textSize?: 'm' | 'l';
  checked: boolean | undefined;
  children?: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}