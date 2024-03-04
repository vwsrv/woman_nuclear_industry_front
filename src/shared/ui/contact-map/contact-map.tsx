import React from 'react';
import { contactMapProps } from './types';
import classes from './styles.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import mapImg from '../../images/map-img.svg';

export const ContactMap: React.FC<contactMapProps> = ({
  address,
  buisnessHours,
  email,
  coordinats
}) => {
  return (
    <div className={cn(classes, classes.contactMapContainer)}>
      <p className={cn(classes, classes.contactMapAddress)}>{address}</p>
      <p className={cn(classes, classes.contactMapHours)}>{buisnessHours}</p>
      <Link
        className={cn(classes, classes.contactMapEmail)}
        type="email"
        href={`mailto:${email}`}
      >
        {email}
      </Link>
      <Image
        className={cn(classes, classes.contactMap)}
        src={mapImg}
        alt="Изображение карты"
      />
    </div>
  );
};
