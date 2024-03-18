'use client';

import { typeInputSearchProps } from '@/shared/ui/inputSearch/types';
import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const InputSearch: React.FC<typeInputSearchProps> = props => {
  const {
    className,
    value = '',
    placeholder = 'Поиск',
    name = 'searchQuery',
    onChange,
    ...otherProps
  } = props;

  // При создании компонента передаем в пропсах 'value' и 'handleChange'. Они могут выглядеть примерно так:

  // const [inputValue, setInputValue] = React.useState<string>('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setInputValue(e.target.value);
  // };

  return (
    <div className={cn(className, classes.searchContainer)}>
      <input
        className={cn(className, classes.searchInput)}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        type="text"
        {...otherProps}
      />
      <button className={cn(className, classes.searchSubmit)} type="submit" />
    </div>
  );
};
