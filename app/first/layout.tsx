import cn from 'classnames';
import classes from './styles.module.scss';
import { ReactNode } from 'react';

const FirstLayout = ({ children }: { children: ReactNode }) => (
  <div className={cn(classes.firstLayout)}>{children}</div>
);

export default FirstLayout;