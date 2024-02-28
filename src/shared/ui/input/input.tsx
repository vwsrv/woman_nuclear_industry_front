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
    type = 'text',
    // name = '',
    ...otherProps
  } = props;

  const [inputValue, setInputValue] = useState(value);
  const [isActive, setIsActive] = useState(false); // useState<boolean>(false)
  
  // Вариант 1.1
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
  //   setInputValue(e.target.value);
  //   if (e.target.value !== '') {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // }

  // Вариант 1.2
  const handleChange = (text: string) : void => {
    setInputValue(text);

    text !== '' ? setIsActive(true) : setIsActive(false);
  }

  useEffect(() => {
    value !== '' ? setIsActive(true) : setIsActive(false);
  }, [ value ]);

  
  return (
    // <div className={cn(className, classes.input__container, classes[variant])}>
      <label className={cn(className, classes.form__item, classes[variant])}>

        {label !== null && label !== undefined && label !== '' && (
          <span className={cn(className, classes.label,
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
          // onChange={handleChange}
          onChange={(e) => handleChange(e.target.value)}
          // name = {name}
          {...otherProps}
        />


        {/* <input type="text" placeholder="" className={cn(className, classes.input)} />
        <span className={cn(className, classes.input__header)}> {label} </span> */}
      </label>
    // </div>
  );
};
