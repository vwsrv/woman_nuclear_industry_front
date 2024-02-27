'use-client';

import { typeSelectBoxProps } from './types';
import classes from './styles.module.scss';
import cn from 'classnames';
import React, { useState, useEffect } from 'react';

export const SelectBox: React.FC<typeSelectBoxProps> = props => {
  const {
    variant = 'white',
    name,
    options,
    value,
    disabled,
    className,
    ...otherProps
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(name);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowDown') {
      setSelectedIndex(prevIndex =>
        prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex
      );
      if (options[selectedIndex + 1]) {
        setSelectedOption(options[selectedIndex + 1].label);
      }
    } else if (event.key === 'ArrowUp') {
      setSelectedIndex(prevIndex =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
      if (options[selectedIndex - 1]) {
        setSelectedOption(options[selectedIndex - 1].label);
      }
    } else if (event.key === 'Enter' && selectedIndex !== -1) {
      handleOptionClick(options[selectedIndex].label);
    }
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
        [classes.enabled]: isOpen,
        ...otherProps
      })}
      onClick={toggleDropdown}
      onKeyDown={handleKeyDown}
      tabIndex={0}
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
            href={option.link}
            className={cn(classes.option, classes[variant], {
              [classes.selected]: option.label === selectedOption,
              [classes.hover]: index === selectedIndex && isOpen
            })}
            onClick={() => handleOptionClick(option.label)}
          >
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};
