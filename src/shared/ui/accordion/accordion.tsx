'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import classes from './styles.module.scss';
import {
  typeAccordionProps,
  typeAccordionItem,
  typeAccordionItemWithState
} from './types';
import cn from 'classnames';
import minus from '@/shared/images/for-accordition/minus.svg';
import plus from '@/shared/images/for-accordition/plus.svg';

export const Accordion: React.FC<typeAccordionProps> = ({
  contentList,
  className
}: typeAccordionProps) => {
  const [propsState, setPropsState] = React.useState<
    typeAccordionItemWithState[]
  >(contentList.map(item => ({ ...item, isOpen: false })));
  return (
    <>
      {propsState.map(
        ({ title, children, isOpen }: typeAccordionItemWithState, index) => (
          <div key={index}>
            <button
              className={cn(classes.button, { [classes.open]: isOpen })}
              onClick={() => {
                setPropsState(prev => {
                  return prev.map((item, stateIndex) => {
                    if (stateIndex === index) {
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
            {isOpen && <div className={cn(classes.content)}>{children}</div>}
          </div>
        )
      )}
    </>
  );
};
