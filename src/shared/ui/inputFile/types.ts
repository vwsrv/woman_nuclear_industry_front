import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithoutRef,
  RefAttributes
} from 'react';

interface typeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  type?: 'file' | string;
  onChange: (e: any) => void;
  // setPreviewAvatar: React.Dispatch<React.SetStateAction<string | undefined>>
  // setImg: React.Dispatch<React.SetStateAction<string | null>>;
  // handleFile: (file: File) => void;

  drop: boolean;
  handleDrop: (event: React.DragEvent<HTMLElement>) => void;
  dragOver: (event: React.DragEvent<HTMLElement>) => void;
  dragLeave: (event: React.DragEvent<HTMLElement>) => void;
}

export type InputProps = PropsWithoutRef<typeInputProps> &
  RefAttributes<HTMLInputElement>;
