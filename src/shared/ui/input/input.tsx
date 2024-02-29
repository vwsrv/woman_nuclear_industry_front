'use client';

import { typeInputProps } from '@/shared/ui/input/types';
import React, { useState, useEffect } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Input: React.FC<typeInputProps> = props => {
  const {
    variant = 'standart', // Значение по умолчанию
    required = false,
    disabled,
    label,
    className,
    value = '',
    // setValue,
    type = 'text',
    placeholder = '',
    // name = '',
    ...otherProps
  } = props;

  const [inputValue, setInputValue] = useState(value);
  
  // Вариант 1
  // const [isActive, setIsActive] = useState(false); // useState<boolean>(false)
    
  // // Вариант 1
  // useEffect(() => {
  //   value !== '' ? setIsActive(true) : setIsActive(false);
  // }, [value]);

  // Вариант 1.1
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
  //   setInputValue(e.target.value);
  //   if (e.target.value !== '') {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // }

  // // Вариант 1.2
  // const handleChange = (text: string): void => {
  //   setInputValue(text);
  //   text !== '' ? setIsActive(true) : setIsActive(false);
  // };

  // Вариант 2
  const handleChange = (text: string): void => {
    setInputValue(text);
  };

  return (
    <label className={cn(className, classes.form__item, classes[variant])}>
      {/* Вариант 1.
      {(variant === 'standart' && label !== '') && (
      // {(label !== null && label !== undefined && label !== '') && (
        <span
          className={cn(
            className,
            classes.label,
            { [classes.required]: required },
            { [classes.active]: isActive }
          )}
        >
          {label}
        </span>
      )}

      <input
        disabled={disabled}
        required={required}
        className={cn(className, classes.input, classes[variant])}
        value={inputValue}
        // onChange={handleChange} // Вариант 1.1
        onChange={e => handleChange(e.target.value)} // Вариант 1.2
        // name = {name}
        {...otherProps}
      /> */}

      {/* Вариант 2 */}
      <input
        disabled={disabled}
        required={required}
        className={cn(className, classes.input, classes[variant])}
        value={inputValue}
        onChange={e => handleChange(e.target.value)} // Вариант 1.2
        placeholder={placeholder}
        {...otherProps}
      />

      {variant === 'standart' && label !== '' && (
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
