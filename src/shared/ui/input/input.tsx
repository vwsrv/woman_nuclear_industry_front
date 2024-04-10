'use client';

import { typeInputProps } from '@/shared/ui/input/types';
import { FC } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Input: FC<Omit<typeInputProps, 'placeholder'>> = (props) => {
  const {
    name,
    label,
    className,
    value,
    handleInputChange,
    required,
    type = 'text',
    error,
    ...otherProps
  } = props;
  // Cтандартный пропс 'placeholder' удален, чтобы случайно не появился под label.

  return (
    <label
      className={cn(className, classes.form__item, {
        [classes.active]: value
      })}
    >
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={e => {
          console.log(1111111)
          handleInputChange(e.target.value)
        }}
        className={cn(className, classes.input, {
          [classes.error]: error
        })}
        {...otherProps}
      />

      {error && (
        <p className={cn(className, classes.error)}>
          {`${error}`}
        </p>
      )}

      {label !== undefined && label !== '' && (
        <span
          className={cn(className, classes.label, {
            [classes.required]: required
          })}
        >
          {label}
        </span>
      )}
    </label>
  );
};
