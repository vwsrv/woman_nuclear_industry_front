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
    onChange,
    required,
    type = 'text',
    ...otherProps
  } = props;
  // Cтандартный пропс 'placeholder' удален.

  // При создании компонента передаем в пропсах 'value' и 'handleChange'. Они могут выглядеть примерно так:
  // const [value, setValue] = React.useState<string>('sdfsdf11');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setValue(e.target.value);
  // };

  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    value !== '' ? setIsActive(true) : setIsActive(false);
  }, [value]);

  return (
    <label
      className={cn(className, classes.form__item, {
        [classes.active]: value || isActive
      })}
    >
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
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
