import { DetailedHTMLProps, HTMLAttributes } from 'react';

type Link = {
  title: string;
  link: string;
};

export interface breadcrumbProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  links: Link[];
}
