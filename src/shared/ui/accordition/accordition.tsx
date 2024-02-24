'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import classes from './styles.module.scss';
import { TypeAccorditionProps } from './types';
import cn from 'classnames';
import minus from '@/shared/images/for-accordition/minus.svg';
import plus from '@/shared/images/for-accordition/plus.svg';

export const Accordition: React.FC<TypeAccorditionProps> = props => {
  const { title, children, onClick } = props;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className={cn(classes.button, { [classes.open]: isOpen })}
        onClick={() => {
          setIsOpen(!isOpen);
          onClick();
        }}
      >
        <h2 className={cn(classes.title)}>{title}</h2>
        <Image
          src={isOpen ? minus : plus}
          alt={isOpen ? 'minus' : 'plus'}
          className={cn(classes.icon)}
        />
      </button>
      {children}
    </div>
  );
};
