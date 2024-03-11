'use client';

import { FC } from 'react';
import { ICheckboxProps } from './types';
import classes from './styles.module.scss';
import cn from 'classnames';

/* Компонент может использоватся в виде самозакрывающегося тега, в случае если в нём нет текста
для label. В ином случае используются парные теги, текст идёт в children;
Для создания хендлера использвать следущий тип event:
  const handleChecked = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(evt.target.checked);
};*/

export const Checkbox: FC<ICheckboxProps> = props => {
  const {
    id,
    className,
    checked,
    textSize = 'm',
    onChange,
    children,
    value,
    ...otherProps
  } = props;

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
        onChange={onChange}
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
