'use client';

import { IHighlightProps } from '@/shared/ui/highlight/types';
import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Highlight: React.FC<IHighlightProps> = ({
  title,
  children,
  bgImage
}) => {
  return (
    <div
      className={cn(classes.highlight)}
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className={cn(classes.children)}>
        <h2 className={cn(classes.title)}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
