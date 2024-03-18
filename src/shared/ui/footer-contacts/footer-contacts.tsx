'use client';

import { typeFooterContactsProps } from '@/shared/ui/footer-contacts/types';
import React from 'react';
import Link from 'next/link';
import classes from './styles.module.scss';
import cn from 'classnames';

export const FooterContacts: React.FC<typeFooterContactsProps> = props => {
  const { className, address, email } = props;

  return (
    <div className={cn(className, classes.container)}>
      <p className={cn(classes.address)}>{address}</p>
      <Link className={cn(classes.email)} href={`mailto:${email}`}>
        {email}
      </Link>
    </div>
  );
};
