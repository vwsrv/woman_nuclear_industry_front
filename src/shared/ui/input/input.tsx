'use client';

import { typeInputProps } from '@/shared/ui/input/types';
import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Input: React.FC<Omit<typeInputProps, 'placeholder'>> = props => {
  const {
    name,
    label,
    className,
    value,
    handleChange,
    required,
    type = 'text',
    ...otherProps
  } = props;

  // Cтандартный пропс 'placeholder' удален, чтобы не мешал.

  // При создании компонента передаем в пропсах 'value' и 'handleChange'. Они могут выглядеть примерно так:
  // const [value, setValue] = React.useState<string>('sdfsdf11');
  // const handleChange = (text: string): void => {
  //   setValue(text);
  // };

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
        onChange={e => handleChange(e.target.value)}
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
