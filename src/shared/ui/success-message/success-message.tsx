'use client';

import { SuccesMessageProps } from './types';
import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import succesIcon from '@/shared/images/for-message-icons/success-message-icon.svg';

export const SuccesMessage: React.FC<SuccesMessageProps> = ({
  message,
  icon
}: SuccesMessageProps) => {
  return (
    <div className={cn(classes.container)}>
      <h2 className={cn(classes.title)}>{message}</h2>
      <Image
        className={cn(classes.image)}
        src={icon ? icon : succesIcon}
        alt="success"
        width={189}
        height={189}
      />
    </div>
  );
};
