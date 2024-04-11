'use client';

import { typeInputProps } from '@/shared/ui/input/types';
import { FC } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { useFormContext } from 'react-hook-form';

export const Input: FC<Omit<typeInputProps, 'placeholder'>> = props => {
  const {
    name,
    label,
    className,
    required,
    type = 'text',
    registerOptions,
    ...otherProps
  } = props;
  // Cтандартный пропс 'placeholder' удален, чтобы случайно не появился под label.

  const {
    register,
    watch,
    formState: { errors },
    setValue
  } = useFormContext();

  const value = watch(name);
  const error = errors[name]?.message || '';
  console.log(errors[name]);
  console.log(registerOptions);
  console.log('value', value);

  return (
    <label
      className={cn(
        className,
        classes.form__item,
        {
          [classes.active]: value
        },
        {
          [classes.error]: error !== ''
        }
      )}
    >
      <input
        {...register(name, {
          pattern: {
            value: registerOptions?.pattern,
            message: registerOptions?.errorMessage
          },
          required: registerOptions?.required
        })}
        name={name}
        type={type}
        required={required}
        onChange={e => setValue(name, e.target.value)}
        className={cn(
          className,
          classes.input,
          {
            [classes.error]: error !== ''
          },
          {
            [classes.onValue]: value && value !== ''
          }
        )}
        {...otherProps}
      />

      {typeof error === 'string' && error !== '' && (
        <p className={cn(className, classes.errorText)}>{error}</p>
      )}

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
