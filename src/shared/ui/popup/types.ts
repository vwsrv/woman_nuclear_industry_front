import { ReactNode } from 'react';

export interface PopupOptions {
  isOpen: boolean;
  onClose: () => void;
  isCloseByOverlay: boolean;
  title: string;
  children: ReactNode;
  actions?: ReactNode[];
}
