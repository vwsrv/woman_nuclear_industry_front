import React, { forwardRef, ForwardRefExoticComponent } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { useFormContext } from 'react-hook-form';
import { InputProps } from './types';

const InputFile: ForwardRefExoticComponent<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const {
    label,
    name,
    type = 'file',
    className,
    // required,
    // disabled,
    onChange,
    drop,
    handleDrop,
    dragOver,
    dragLeave,
    ...otherProps
  } = props;

  const {
    watch,
    formState: { errors },
    setValue
  } = useFormContext();

  const value = watch(name);
  // const value = watch('photo');
  // const error = errors[name]?.message || '';

  return (
    <label
      className={cn(classes.form__item_upload, { [classes.drop]: drop })}
      onDrop={handleDrop}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
    >
      <div className={cn(classes.labelContainer)}>
        <span className={cn(classes.dropTitle)}>Перетащите файл сюда</span>
        <span className={cn(classes.dropStrip)}>или</span>
        <span className={cn(classes.buttonUpload)}>Выберите файл</span>

        <input
          name={name}
          type={type}
          value={value}
          // value={value?.fileName}
          // onChange={onChange}
          onChange={e => {
            onChange(e);
            // setValue(name, e.target.files, { shouldDirty: true });
            // console.log('e', e);
            // console.log('value', value);
          }}
          accept=".png, .jpg, .jpeg, .gif"
          ref={ref}
          className={cn(classes.inputFile)}
          {...otherProps}
        />
      </div>
    </label>
  );
});

InputFile.displayName = 'InputFile';

export { InputFile };
