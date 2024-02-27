'use-client';

import { typeSelectBoxProps } from './types';
import classes from './styles.module.scss';
import cn from 'classnames';
import React, { useState, useEffect } from 'react';

export const SelectBox: React.FC<typeSelectBoxProps> = props => {
  const {
    variant = 'blue',
    name,
    options,
    value,
    disabled,
    className,
    ...otherProps
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(name);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(`.${classes.options}`)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (optionLabel: string) => {
    setSelectedOption(optionLabel);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={cn(className, classes.selectbox, classes[variant], {
        ...otherProps
      })}
      onClick={toggleDropdown}
    >
      <button className={cn(classes[variant], classes.button)}>
        {selectedOption}
      </button>
      <div
        className={cn(classes.options, classes[variant], {
          [classes.enabled]: isOpen
        })}
      >
        {options.map((option, index) => (
          <a
            key={index}
            className={cn(classes[variant])}
            onClick={() => handleOptionClick(option.label)}
          >
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};
