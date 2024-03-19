import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IMissionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  text: string;
  counters: {
    value: string;
    label: string;
  }[];
}
