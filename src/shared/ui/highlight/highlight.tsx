'use client';

import { typeHighlightProps } from '@/shared/ui/highlight/types';
import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';

export const Highlight: React.FC<typeHighlightProps> = ({
  title,
  content,
  bgImage
}) => {
  return (
    <div className={cn(classes.highlight)}>
      <div className={cn(classes.content)}>
        <h2 className={cn(classes.title)}>{title}</h2>
        {content}
      </div>
      <Image className={cn(classes.bgImage)} src={bgImage} alt="bgImage" />
    </div>
  );
};
