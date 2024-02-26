'use client';

import { typeInputProps } from '@/shared/ui/input/types';
import React, { useState } from 'react';
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
    // name = '',
    ...otherProps
  } = props;

  console.log('label', label);
  // console.log('required 2', required);

  // { variant ? classes[variant] : ''} 
  // { variant ? classes[variant] : '' }

  const [ inputValue, setInputValue ] = useState(value);
  const [ isActive, setIsActive ] = useState(false);
  
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  // let inputIsFilled: boolean = React.useRef(true);
  // // let inputIsFilled: boolean = true;

  // React.useEffect(() => {
  //   (inputValue !== '') ? 
  //     inputIsFilled.current = true :
  //     inputIsFilled.current = false
  // }, [ inputValue ]);

  return (
    <div className={cn( className, classes.input__container, classes[variant] )}>
      <label className={cn( className, classes.input__label )}>

        { 
        (label !== null && label !== undefined && label !== '') && 
        <span className={cn( className, classes.input__heading, {[classes.required]: required},
          // {[classes.zzzzz]: inputIsFilled}
          // classes.filled
          {[classes.focus]: isActive}
        )}>
          {label}
        </span>
        }

        <input
          disabled = {disabled}
          required = {required}
          className = {cn(className, classes.input, { [classes.circle]: disabled })}
          onChange = {evt => { setInputValue(evt.target.value) }}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          value = {inputValue}
          // name = {name}
          {...otherProps}
        />

      </label>
    </div>
  );
};
