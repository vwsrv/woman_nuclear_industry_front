'use client';
import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { NewsProps } from './types';
import Link from 'next/link';
import Image from 'next/image';
import calendar from './images/calendar.svg';

export const News: React.FC<NewsProps> = props => {
  const { imageUrl, date, title, link } = props;
  return (
    <Link href={link} className={cn(classes.news)}>
      <div className={cn(classes.news__image)}>
        <Image
          src={imageUrl}
          alt="Изображение новости"
          width={308}
          height={209}
        ></Image>
      </div>
      <div className={cn(classes.news__content)}>
        <div className={cn(classes.news__content_containerDate)}>
          <div>
            <Image
              src={calendar}
              alt="Изображение календаря"
              width={28}
              height={28}
            />
          </div>
          <p className={cn(classes.news__content_date)}>{date}</p>
        </div>
        <h1 className={cn(classes.news__content_title)}>{title}</h1>
      </div>
    </Link>
  );
};
