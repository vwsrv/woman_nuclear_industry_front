import { forwardRef, ForwardRefExoticComponent } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { useFormContext } from 'react-hook-form';
import { InputProps } from './types';

const Input: ForwardRefExoticComponent<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const {
    name,
    label,
    className,
    required,
    onChange,
    type = 'text',
    ...otherProps
  } = props;

  const {
    watch,
    formState,
    formState: { errors },
    setValue,
    // register,
  } = useFormContext();

  const value = watch(name);
  const error = errors[name]?.message || '';  

  // if (name === 'bio') {
  //   console.log('errors', formState);
  // }
  
  
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
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={
          onChange
            ? e => setValue(name, onChange(e), { shouldDirty: true })
            : e => setValue(name, e.target.value, { shouldDirty: true })
        }
        className={cn(className, classes.input, {
          [classes.error]: error !== ''
        })}
        ref={ref}
        {...otherProps}
      />

      <span
        className={cn(className, classes.errorText, {
          [classes.error]: error !== ''
        })}
      >
        {typeof error === 'string' && error !== '' ? error : ''}
      </span>

      {label !== undefined && label !== '' && (
        <span
          className={cn(
            className,
            classes.label,
            {
              [classes.required]: required
            },
            {
              [classes.error]: error !== ''
            }
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
});

Input.displayName = 'Input';

export { Input };
