import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactNode } from 'react';

export type typeHighlightProps = {
  title: string;
  content: ReactNode;
  bgImage: StaticImport;
};
