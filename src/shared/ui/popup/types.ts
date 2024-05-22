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
  title?: string | undefined;
  children: ReactNode;
  actions?: ReactNode[];
  variant?: 'default' | 'dialog';
}
