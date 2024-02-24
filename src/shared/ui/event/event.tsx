'use client';

import { typeEventProps } from '@/shared/ui/event/types';
import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import EventImage from './images/image_event.png';
import CalendarIcon from './images/calendar_icon.svg';
import EventIcon from './images/event_icon.svg';


export const Event: React.FC<typeEventProps> = props => {
  const {
    className,
    imageUrl,
    title,
    date,
    evntType,
  } = props;

  return (
    <div className={cn(className, classes.event_container)}>
      <Image 
        className={cn(classes.event__image)}
        src={imageUrl ? imageUrl : EventImage}
        alt='фото мероприятия'
        width={431}
        height={450} 
      />
      <div className={cn(classes.event__data)}>
        <div className={cn(classes.event__info)}>
          <Image 
            className={cn(classes.event__icon, classes.event__icon_calendar)}
            src={CalendarIcon}
            alt='calendar'
            width={28}
            height={28} 
          />
          <p className={cn(classes.event__date)}>{date}</p>

          <Image 
            className={cn(classes.event__icon, classes.event__icon_event)}
            src={EventIcon}
            alt='event'
            width={28}
            height={28}
          />
          <p className={cn(classes.event__type)}>{evntType}</p>
        </div>
        <h3 className={cn(classes.event__title)}>{title}</h3>
      </div>
    </div>
  );
};