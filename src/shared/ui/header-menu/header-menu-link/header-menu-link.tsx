'use client';

import cn from 'classnames';
import classes from './styles.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { headerMenuLinkProps } from './types';
import Image from 'next/image';
import arrow from '@/shared/images/arrow-down.svg';

export const HeaderMenuLink: React.FC<headerMenuLinkProps> = ({
  className,
  link
}) => {
  const [isOpen, setOpen] = useState(false);

  const visable = () => {
    setOpen(true);
  };

  const hidden = () => {
    setOpen(false);
  };

  return (
    <>
      {link.children ? (
        <li
          className={cn(className, classes.headerMenuLinkWrapper)}
          onClick={visable}
        >
          <p className={cn(className, classes.headerMenuLink)}>
            {link.title}
            <Image src={arrow} alt="Стрелка вниз" />
          </p>
          {link.children && (
            <ul
              className={cn(className, classes.headerMenuLinksChildren, {
                [classes.open]: isOpen
              })}
              onMouseLeave={hidden}
            >
              {link.children.map((link, index) => (
                <li
                  key={index}
                  className={cn(className, classes.headerMenuChildrenLink)}
                >
                  <Link
                    className={cn(className, classes.headerMenuLink)}
                    href={link.link}
                    key={index}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ) : (
        <li>
          <Link
            className={cn(className, classes.headerMenuLink)}
            href={link.link}
          >
            {link.title}
          </Link>
        </li>
      )}
    </>
  );
};
