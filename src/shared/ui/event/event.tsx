'use client';

import { typeEventProps } from '@/shared/ui/event/types';
import React from 'react';
import Link from 'next/link';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import EventImage from '@/shared/ui/event/images/image_event.png';
import CalendarIcon from '@/shared/ui/event/images/calendar_icon.svg';
import EventIcon from '@/shared/ui/event/images/event_icon.svg';


export const Event: React.FC<typeEventProps> = props => {
  const {
    className,
    imageUrl,
    title,
    date,
    eventType,
    linkUrl,
  } = props;

  return (
    <Link className={cn(className, classes.container)} href={linkUrl}>
      <Image 
        className={cn(classes.image)}
        src={imageUrl ? imageUrl : EventImage}
        alt='фото мероприятия'
        width={431}
        height={450} 
      />
      <div className={cn(classes.data)}>
        <div className={cn(classes.info)}>
          <Image 
            className={cn(classes.icon, classes.calendar)}
            src={CalendarIcon}
            alt='calendar'
            width={28}
            height={28} 
          />
          <p className={cn(classes.date)}>{date}</p>

          <Image 
            className={cn(classes.icon, classes.event)}
            src={EventIcon}
            alt='event'
            width={28}
            height={28}
          />
          <p className={cn(classes.type)}>{eventType}</p>
        </div>
        <h3 className={cn(classes.title)}>{title}</h3>
      </div>
    </Link>
  );
};