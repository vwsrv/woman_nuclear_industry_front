import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface newsHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: string;
}
