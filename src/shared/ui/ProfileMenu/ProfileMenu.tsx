'use client';
import React from 'react';
import { typeProfileMenuPropsArray } from '@/shared/ui/ProfileMenu/types';
import Link from 'next/link';
import classes from './styles.module.scss';
import cn from 'classnames';

export const ProfileMenu: React.FC<typeProfileMenuPropsArray> = props => {
  const { titleProps } = props;
  const location = window.location.pathname;
  console.log(location);
  return (
    <ul className={cn(classes.ProfileMenu)}>
      {titleProps.map(item => {
        return (
          <li key={item.id}>
            <Link href={item.link} className={classes.link}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
