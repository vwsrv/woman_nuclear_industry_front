import React from 'react';
import classes from './styles.module.scss';

const ContentLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default ContentLayout;
