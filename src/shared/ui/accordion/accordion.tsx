'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import classes from './styles.module.scss';
import { AccordionProps, AccordionPropsType } from './types';
import cn from 'classnames';
import minus from '@/shared/images/for-accordition/minus.svg';
import plus from '@/shared/images/for-accordition/plus.svg';

export const Accordion: React.FC<AccordionPropsType> = ({
  props
}: AccordionPropsType) => {
  const [propsState, setPropsState] = React.useState<AccordionProps[]>(props);
  return (
    <>
      {propsState.map(({ title, children, isOpen }: AccordionProps, index) => (
        <div key={index}>
          <button
            className={cn(classes.button, { [classes.open]: isOpen })}
            onClick={() => {
              setPropsState(prev => {
                return prev.map(item => {
                  if (item.children === children && item.title === title) {
                    return {
                      ...item,
                      isOpen: !isOpen
                    };
                  }
                  return item;
                });
              });
            }}
          >
            <h2 className={cn(classes.title)}>{title}</h2>
            <Image
              src={isOpen ? minus : plus}
              alt={isOpen ? 'Минус' : 'Плюс'}
              className={cn(classes.icon)}
            />
          </button>
          {isOpen && (
            <div className={cn(classes.content)}>
              <p>{children}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
