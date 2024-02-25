'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import classes from './styles.module.scss';
import { TypeAccordionProps } from './types';
import cn from 'classnames';
import minus from '@/shared/images/for-accordition/minus.svg';
import plus from '@/shared/images/for-accordition/plus.svg';

export const Accordion: React.FC<TypeAccordionProps> = props => {
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
          alt={isOpen ? 'Минус' : 'Плюс'}
          className={cn(classes.icon)}
        />
      </button>
      <div className={cn(classes.content)}>{isOpen && children}</div>
    </div>
  );
};
