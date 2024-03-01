'use client';
import React from 'react';
import { typeProfileMenuProps } from '@/shared/ui/profile-menu/types';
import Link from 'next/link';
import classes from './styles.module.scss';
import cn from 'classnames';

export const ProfileMenu: React.FC<typeProfileMenuProps> = props => {
  const { titleProps } = props;
  const location = window.location.pathname;

  return (
    <ul className={cn(classes.ProfileMenu)}>
      {titleProps.map(item => {
        return (
          <li key={item.id}>
            <Link
              href={item.link}
              className={cn(classes.ProfileMenu__link, {
                [classes.ProfileMenu__link_active]: location === item.link
              })}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
