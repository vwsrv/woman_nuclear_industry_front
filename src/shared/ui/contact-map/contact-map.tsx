'use client';

import React from 'react';
import { contactMapProps } from './types';
import classes from './styles.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import YandexMapLoader from '@/utils/yandex-map-loader/yandex-map-loader';

const Map = dynamic(() => import('@/shared/ui/map').then(mod => mod.Map), {
  ssr: false
});

export const ContactMap: React.FC<contactMapProps> = ({
  className,
  address,
  buisnessHours,
  email,
  coordinats
}) => {
  return (
    <div className={cn(className, classes.contactMap)}>
      <div className={cn(className, classes.contactMapWrapper)}>
        <p className={cn(className, classes.contactMapAddress)}>{address}</p>
        <p className={cn(className, classes.contactMapHours)}>
          {buisnessHours}
        </p>
        <Link
          className={cn(className, classes.contactMapEmail)}
          type="email"
          href={`mailto:${email}`}
        >
          {email}
        </Link>
      </div>
      <YandexMapLoader />
      <Map className="map" coordinats={coordinats} />
    </div>
  );
};
