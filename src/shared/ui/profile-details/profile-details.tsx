'use client';

import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { profileDetailsProps } from './types';
import { Button } from '../button';
import Image from 'next/image';

export const ProfileDetails: React.FC<profileDetailsProps> = props => {
  const { imageUrl, name, description, profileAbout } = props;

  return (
    <div className={cn(classes.profileDetails)}>
      <div className={cn(classes.profileCard)}>
        <Image
          src={imageUrl}
          alt={name}
          className={cn(classes.profilePhoto)}
        ></Image>
        <h2>{name}</h2>
        <ul className={cn(classes.profileDescription)}>
          {Array.isArray(description) ? (
            description.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))
          ) : (
            <li>
              <p>{description}</p>
            </li>
          )}
        </ul>
        <Button variant="violet">Поддержать</Button>
      </div>
      <div className={cn(classes.profileAbout)}>{profileAbout}</div>
    </div>
  );
};
