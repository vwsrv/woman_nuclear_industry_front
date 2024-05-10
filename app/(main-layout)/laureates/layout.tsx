import cn from 'classnames';
import classes from './styles.module.scss';
import { ReactNode } from 'react';

const LaureatesLayout = ({ children }: { children: ReactNode }) => (
  <div className={cn(classes.laureatesLayout)}>{children}</div>
);

export default LaureatesLayout;