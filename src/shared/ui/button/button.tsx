'use client';

import { typeButtonProps } from '@/shared/ui/button/types';
import React from 'react';
import classes from './styles.module.scss';

export const Button: React.FC<typeButtonProps> = props => {
  const { children, variant = 'violet', ...otherProps } = props;

  return (
    <button className={classes.violet} {...otherProps}>
      {children}
    </button>
  );
};
