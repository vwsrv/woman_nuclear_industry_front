'use client';

import React, {
  useRef,
  useState,
  ChangeEvent,
  forwardRef,
  ForwardRefExoticComponent
} from 'react';
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
    // value,
    onChange,
    drop,
    handleUploadedFile,
    handleDrop,
    dragOver,
    dragLeave,
    setPreviewAvatar,
    ...otherProps
  } = props;

  const {
    watch,
    formState: { errors },
    setValue
  } = useFormContext();

  // const hiddenInputRef = useRef();

  const value = watch(name);
  // const value = watch('photo');
  // const error = errors[name]?.message || '';
  // if (!value) return null;
  // console.log('value', value);
  // console.log('value222', value222);

  return (
    <label
      className={cn(classes.form__item_upload, { [classes.drop]: drop })}
      onDrop={handleDrop}
      // onDrop={e => {
      //   handleDrop(e);
      //   // setValue(name, e.dataTransfer.files, { shouldDirty: true })
      // }}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      htmlFor={name}
    >
      <div className={cn(classes.labelContainer)}>
        <span className={cn(classes.dropTitle)}>Перетащите файл сюда</span>
        <span className={cn(classes.dropStrip)}>или</span>
        <span className={cn(classes.buttonUpload)}>Выберите файл</span>

        <input
          name={name}
          id={name}
          type={type}
          // value={value}
          // value={value?.fileName}
          value={undefined}
          onChange={handleUploadedFile}
          // onChange={e => {
          //   setValue(name, e.target.files, { shouldDirty: true });
          // }}
          // onChange={e => {
          //   handleUploadedFile(e);
          //   // setValue(name, e.target.value, { shouldDirty: true });
          //   // onChange(e.target.files[0]);
          //   // setValue(name, e.target.files, { shouldDirty: true });
          //   // console.log('e', e);
          //   // console.log('value', e.target.value);
          // }}
          accept=".png, .jpg, .jpeg, .gif"
          ref={ref}
          className={cn(classes.inputFile)}
          // {...otherProps}
        />
      </div>
    </label>
  );
});

InputFile.displayName = 'InputFile';

export { InputFile };
