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
    onChange,
    drop,
    handleUploadedFile,
    handleDrop,
    dragOver,
    dragLeave,
    setPreviewAvatar,
    ...otherProps
  } = props;

  return (
    <label
      className={cn(classes.form__item_upload, { [classes.drop]: drop })}
      onDrop={handleDrop}
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
          value={undefined}
          onChange={handleUploadedFile}
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
