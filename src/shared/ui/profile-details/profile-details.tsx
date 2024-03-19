import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { profileDetailsProps } from './types';

export const profileDetails: React.FC<profileDetailsProps> = props => {
  const { profileCard, profileAbout } = props;

  return <div className={cn(classes.profileAbout)}></div>;
};
