import cn from 'classnames';
import classes from './styles.module.scss';
import { ReactNode } from 'react';

export const NewsLayout = ({ children }: { children: ReactNode }) => (
  <div className={cn(classes.newsLayout)}>{children}</div>
);
