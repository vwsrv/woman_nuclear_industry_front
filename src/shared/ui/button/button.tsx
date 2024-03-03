'use client';

import { typeButtonProps } from '@/shared/ui/button/types';
import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Button: React.FC<typeButtonProps> = props => {
  const {
    variant = 'violet',
    children,
    disabled,
    className,
    ...otherProps
  } = props;

  return (
    <button
      disabled={disabled}
      className={cn(className, classes.button, classes[variant])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
