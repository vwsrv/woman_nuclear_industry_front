import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeProjectsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  linkUrl: string;
  textBtnFirst: string;
  textBtnSecond: string;
  textBtnThird: string;
  awardSupportTitle: string;
  projectsSupportTitle: string;
  awardSupportText: string;
  projectsSupportText: string;
}
