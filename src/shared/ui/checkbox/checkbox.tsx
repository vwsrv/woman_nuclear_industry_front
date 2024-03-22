'use client';

import { FC } from 'react';
import { ICheckboxProps } from './types';
import classes from './styles.module.scss';
import cn from 'classnames';

/* 
1. Компонент может использоватся в виде самозакрывающегося тега, в случае если в нём нет текста
для label. В ином случае используются парные теги, текст идёт в children;
2. Для передачи стейта использовать стандартный проп checked;
3. Для работы внутреннего хендлера передавать в проп onCheckboxChange функцию-диспатчер стейта;
  Пример: если используем useState, то в checked идёт isChecked, а в onCheckboxChange идёт
  setIsChecked;
*/

export const Checkbox: FC<ICheckboxProps> = props => {
  const {
    id,
    className,
    checked,
    textSize = 'm',
    onChange,
    children,
    value,
    onCheckboxChange,
    ...otherProps
  } = props;

  const handleChecked = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(evt.target.checked);
  };

  return (
    <label htmlFor={id} className={cn(className, classes.label)}>
      <input
        className={cn(classes.checkbox, {
          [classes.checked]: checked
        })}
        type="checkbox"
        id={id}
        value={id}
        checked={checked}
        onChange={handleChecked}
        {...otherProps}
      />
      <span
        className={cn(classes.span, {
          [classes.visible]: children,
          [classes.medium]: textSize === 'm',
          [classes.large]: textSize === 'l'
        })}
      >
        {children}
      </span>
    </label>
  );
};
