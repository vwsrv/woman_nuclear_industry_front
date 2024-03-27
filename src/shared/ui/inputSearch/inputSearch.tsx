'use client';

import { typeInputSearchProps } from '@/shared/ui/inputSearch/types';
// import React from 'react';
import { FC } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

export const InputSearch: FC<typeInputSearchProps> = props => {
  const {
    className,
    value = '',
    placeholder = 'Поиск',
    name = 'searchQuery',
    handleInputChange,
    handleForm,
    ...otherProps
  } = props;

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    handleForm(value);
    // handleForm();
  };  

  return (
    <form className={cn(classes.searchContainer)} action="#" onSubmit={handleSubmit} noValidate>
      <input
        className={cn(classes.searchInput)}
        value={value}
        onChange={e => handleInputChange(e.target.value)}
        name={name}
        placeholder={placeholder}
        type="text"
        {...otherProps}
      />
      <button
        className={cn(classes.searchSubmit)}
        type="submit"
      />
    </form>
  );
};
