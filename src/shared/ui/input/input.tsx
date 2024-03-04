'use client';

import { typeInputProps } from '@/shared/ui/input/types';
import React, { useState } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Input: React.FC<Omit<typeInputProps, 'placeholder'>> = props => {
  const {
    name,
    label,
    className,
    value = '',
    // setValue,
    required = false,
    type = 'text',
    ...otherProps
  } = props;

  const [inputValue, setInputValue] = useState(value);

  const handleChange = (text: string): void => {
    setInputValue(text);
  };

  return (
    <label className={cn(className, classes.form__item)}>
      <input
        name={name}
        type={type}
        required={required}
        value={inputValue}
        onChange={e => handleChange(e.target.value)}
        className={cn(className, classes.input)}
        placeholder="" // пустой атрибут необходим для трансформации label(span)
        {...otherProps}
      />

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
