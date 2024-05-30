import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import LaureateItem from './LaureateItem';
import { ILaureate } from './types';

interface LaureateListProps {
  laureates: ILaureate[];
}

const LaureateList: React.FC<LaureateListProps> = ({ laureates }) => {
  return (
    <div className={cn(classes.laureatesList)}>
      {laureates.map(laureate => (
        <LaureateItem key={laureate.id} laureate={laureate} />
      ))}
    </div>
  );
};

export default LaureateList;
