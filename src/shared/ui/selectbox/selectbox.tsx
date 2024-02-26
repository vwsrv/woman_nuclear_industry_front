'use-client';

import { typeSelectBoxProps } from './types';
import classes from './styles.module.scss';
import cn from 'classnames';
import React from 'react';

export const SelectBox: React.FC<typeSelectBoxProps> = props => {
  const {
    variant = 'white',
    options,
    value,
    disabled,
    className,
    ...otherProps
  } = props;

  return (
    <select
      disabled={disabled}
      className={cn(
        className,
        classes.selectbox,
        classes[variant],
        { [classes.circle]: disabled },
        { ...otherProps }
      )}
      value={value}
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          className={cn(className, classes.options, classes[variant], {
            ...otherProps
          })}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
