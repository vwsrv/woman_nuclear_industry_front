import cn from 'classnames';
import classes from './styles.module.scss';
import { ReactNode } from 'react';

export const SignLayout = ({ children }: { children: ReactNode }) => (
  <div className={cn(classes.signLayout)}>{children}</div>
);
