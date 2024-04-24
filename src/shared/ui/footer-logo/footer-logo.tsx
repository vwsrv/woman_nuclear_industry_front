'use client';

import { FC } from 'react';
import { IFooterLogoProps } from './types';
import Image from 'next/image';
import logo from '../../images/for-footer-logo/footer-logo.svg';
import classes from './styles.module.scss';
import cn from 'classnames';

export const FooterLogo: FC<IFooterLogoProps> = props => {
  const { className, copyrightText, copyrightYear, ...otherProps } = props;

  return (
    <div className={cn(className, classes.container)} {...otherProps}>
      <Image src={logo} alt="Логотип Объединения женщин атомной отрасли" />
      <p className={cn(classes.text)}>
        {copyrightText} {copyrightYear}
      </p>
    </div>
  );
};
