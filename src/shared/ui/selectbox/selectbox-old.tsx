'use-client';

import { typeSelectBoxProps } from './types';
import classes from './styles.module.scss';
import cn from 'classnames';
import React, { useEffect } from 'react';

export const SelectBox: React.FC<typeSelectBoxProps> = props => {
  const {
    variant = 'violet',
    name,
    options,
    value,
    disabled,
    className,
    ...otherProps
  } = props;

  useEffect(() => {
    const optionElements = document.querySelectorAll('#selectbox option');
    optionElements.forEach(optionElement => {
      const curText = optionElement.textContent || '';
      optionElement.setAttribute('title', curText);
      const trimMultiplier = 10;
      const computedStyle = getComputedStyle(
        optionElement.parentElement as Element
      );
      const lengthToShortenTo = Math.round(
        parseInt(computedStyle.maxWidth || '0', 10) / trimMultiplier
      );
      if (curText.length > lengthToShortenTo) {
        optionElement.textContent = `${curText.substring(0, lengthToShortenTo)}...`;
      }
    });
  }, []);

  return (
    <select
      disabled={disabled}
      className={cn(className, classes.selectbox, classes[variant], {
        ...otherProps
      })}
      id="selectbox"
    >
      <option
        className={cn(className, classes.options, classes[variant], {
          ...otherProps
        })}
      >
        {name}
      </option>
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          className={cn(className, classes.options, classes[variant], {
            ...otherProps
          })}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
