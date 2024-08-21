'use client';

import { typePartnersProps } from '@/shared/ui/partners/types';
import React from 'react';
import Link from 'next/link';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';

export const Partners: React.FC<typePartnersProps> = props => {
  const { className, logos, linkUrl } = props;

  return (
    <div className={cn(className, classes.partners)}>
      <ul className={cn(className, classes.logo)}>
        {logos.map((logo, index) => (
          <li className={cn(className, classes.logo_item)} key={index}>
            <Link href={logo.link ? logo.link : ''}>
              <Image
                className={cn(classes.image)}
                src={logo.logo}
                alt="логотип компании-партнёра"
                width={214}
                height={100}
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className={cn(className, classes.info)}>
        <h1 className={cn(className, classes.title)}>Наши партнёры</h1>
        <p className={cn(className, classes.text)}>
          Международный совет по поддержке и развитию женщин в промышленности и
          технологиях
        </p>
      </div>
    </div>
  );
};
