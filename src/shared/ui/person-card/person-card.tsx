import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { typePersonCardProps } from './types';
import Link from 'next/link';

export const PersonCard: React.FC<typePersonCardProps> = props => {
  const { imageUrl, name, description, handler } = props;

  return (
    <div className={cn(classes.container)}>
      <Image
        width={278}
        height={287}
        className={cn(classes.image)}
        src={imageUrl}
        alt={name}
      />
      <div className={cn(classes.buttonContainer)}>
        {typeof handler === 'function' ? (
          <button className={cn(classes.button)} onClick={handler}>
            <p className={cn(classes.buttonText)}>Подробнее</p>
          </button>
        ) : (
          <Link className={cn(classes.button)} href={handler}>
            <p className={cn(classes.buttonText)}>Подробнее</p>
          </Link>
        )}
      </div>

      <p className={cn(classes.text, 'bold')}>PersonCard</p>
      <p className={cn(classes.text)}>{description}</p>
    </div>
  );
};
