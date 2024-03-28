'use client';

import { IAboutProps } from '@/shared/ui/about/types';
import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const About: React.FC<IAboutProps> = ({ title, text, links }) => {
  return (
    <div className={cn(classes.about)}>
      <div className={cn(classes.contentContainer)}>
        <h2 className={cn(classes.title)}>{title}</h2>
        <p className={cn(classes.text)}>{text}</p>
        <ul className={cn(classes.links)}>
          {links.map((link, index) => (
            <li key={index} className={cn(classes.link)}>
              <a href={link.link} className={cn(classes.linkTitle)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
