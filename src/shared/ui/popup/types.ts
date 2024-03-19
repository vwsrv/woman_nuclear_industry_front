import { ReactNode } from 'react';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface PopupOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isOpen: boolean;
  onClose: () => void;
  isCloseByOverlay: boolean;
  title: string;
  children: ReactNode;
  actions?: ReactNode[];
}
