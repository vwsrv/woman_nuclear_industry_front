import cn from 'classnames';
import classes from './styles.module.scss';
import { ReactNode } from 'react';

export const AuthLayout = ({ children }: { children: ReactNode }) => (
  <div className={cn(classes.authLayout)}>{children}</div>
);
