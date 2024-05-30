import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { ILaureate } from './types';
import classes from './styles.module.scss';

interface LaureateItemProps {
  laureate: ILaureate;
}

const LaureateItem: React.FC<LaureateItemProps> = ({ laureate }) => {
  return (
    <div className={cn(classes.laureate)}>
      <Image
        className={cn(classes.laureate__image)}
        src={laureate.imageUrl}
        alt={laureate.fullName}
      />
      <div className={cn(classes.laureate__info)}>
        <h3 className={cn(classes.laureate__fullName)}>{laureate.fullName}</h3>
        <p className={cn(classes.laureate__position)}>{laureate.position}</p>
        <p className={cn(classes.laureate__description)}>
          {laureate.description}
        </p>
      </div>
    </div>
  );
};

export default LaureateItem;
