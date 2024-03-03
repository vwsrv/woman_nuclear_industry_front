'use client';

import { typeInputProps } from '@/shared/ui/input/types';
import React, { useState } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Input: React.FC<typeInputProps> = props => {
  const {
    name,
    label,
    className,
    value = '',
    // setValue,
    required = false,
    type = 'text',
    placeholder = '',
    ...otherProps
  } = props;

  // Атрибут placeholder необходим для трансформации label. Если не будет работать в Хром - поставить значение "пробел".
  // Можно сделать трансформацию и без участия placeholder, но его в любом случае придется обнулять или удалять у элемента.

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
        placeholder="" // Всегда обнуляется + скрыт через css
        className={cn(className, classes.input)}
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
