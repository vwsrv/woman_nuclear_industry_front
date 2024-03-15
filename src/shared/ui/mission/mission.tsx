'use client';

import { IMissionProps } from '@/shared/ui/mission/types';
import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Mission: React.FC<IMissionProps> = ({
  title,
  text,
  counters,
  bgImage
}) => {
  return (
    <div
      className={cn(classes.mission)}
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <h2 className={cn(classes.title)}>{title}</h2>
      <p className={cn(classes.text)}>{text}</p>
      <ul className={cn(classes.counter)}>
        {counters.map((counter, index) => (
          <li key={index}>
            <p className={cn(classes.counterValue)}>{counter.value}</p>
            <p className={cn(classes.counterLabel)}>{counter.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
