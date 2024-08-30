'use client';
import React, { useEffect } from 'react';
import { typeProfileMenuProps } from '@/shared/ui/profile-menu/types';
import Link from 'next/link';
import classes from './styles.module.scss';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

export const ProfileMenu: React.FC<typeProfileMenuProps> = props => {
  const { menuItems } = props;
  const location = usePathname();

  return (
    <ul className={cn(classes.ProfileMenu)}>
      {menuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              href={item.link}
              className={cn(classes.ProfileMenu__link, {
                [classes.ProfileMenu__link_active]: location === item.link
              })}
              style={{ color: item.color }}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
