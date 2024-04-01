'use client';

import { typeInputProps } from '@/shared/ui/input/types';
import { FC } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Input: FC<Omit<typeInputProps, 'placeholder'>> = props => {
  const {
    name,
    label,
    className,
    value,
    handleInputChange,
    required,
    type = 'text',
    ...otherProps
  } = props;
  // Cтандартный пропс 'placeholder' удален, чтобы случайно не появился под label.

  return (
    <label
      className={cn(classes.form__item, {
        [classes.active]: value
      })}
    >
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={e => handleInputChange(e.target.value)}
        className={cn(classes.input)}
        {...otherProps}
      />

      {label !== undefined && label !== '' && (
        <span
          className={cn(classes.label, {
            [classes.required]: required
          })}
        >
          {label}
        </span>
      )}
    </label>
  );
};
