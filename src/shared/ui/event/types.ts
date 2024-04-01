import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeEventProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageUrl?: string;
  title: string;
  date?: Date;
  eventType?: string;
  linkUrl: string;
}
