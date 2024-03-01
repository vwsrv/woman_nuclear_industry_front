'use client';

import { typeInputProps } from '@/shared/ui/input/types';
import React, { useState, useEffect } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Input: React.FC<typeInputProps> = props => {
  const {
    variant = 'inline', // Значение по умолчанию
    label,
    className,
    value = '',
    // setValue,
    // disabled,
    required = false,
    type = 'text',
    placeholder = '',
    ...otherProps
  } = props;

  const [inputValue, setInputValue] = useState(value);

  // useState, useEffect, строка в handleChange и класс с isActive/setIsActive не нужны, все работает и без них.
  // Если оставлять "variant", можно будет адаптировать этот код.
  // const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   value !== '' ? setIsActive(true) : setIsActive(false);
  // }, [value]);

  const handleChange = (text: string): void => {
    setInputValue(text);
    // text !== '' ? setIsActive(true) : setIsActive(false);
  };

  return (
    <label className={cn(className, classes.form__item, classes[variant])}>
      <input
        // disabled={disabled}
        required={required}
        className={cn(className, classes.input)}
        value={inputValue}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder} // скрывается через css
        // placeholder='' // принудительное обнуление, чтобы не перекрывал label(span)
        // placeholder={ variant === 'inline' ? '' : placeholder}
        {...otherProps}
      />

      {/* {(variant !== 'topside' && label !== undefined && label !== '') && ( */}
      {label !== undefined && label !== '' && (
        <span
          className={cn(
            className,
            classes.label,
            { [classes.required]: required }
            // { [classes.active]: isActive }
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};
