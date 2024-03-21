'use-client';

import { typeSelectBoxProps } from './types';
import classes from './styles.module.scss';
import cn from 'classnames';
import React, { useState } from 'react';

export const SelectBox: React.FC<typeSelectBoxProps> = props => {
  const {
    variant = 'violet',
    dataList,
    value,
    setValue,
    ...otherProps
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab') {
      setIsOpen(true);
    }
  };

  const handleSelect = (newValue: string) => {
    setValue(newValue);
    setIsOpen(false);
  };

  return (
    <div
      className={cn(classes.selectbox, classes[variant], {
        [classes.enabled]: isOpen,
        ...otherProps
      })}
      onClick={toggleDropdown}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button className={cn(classes[variant], classes.button)}>{value}</button>
      <div
        className={cn(classes.options, classes[variant], {
          [classes.enabled]: isOpen
        })}
      >
        {dataList.map((option, index) => (
          <button
            key={index}
            className={cn(classes.option, classes[variant])}
            onClick={() => handleSelect(option.label)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
