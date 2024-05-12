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
    name,
    label,
    className,
    // required,
    // disabled,
    onChange,
    handleFile,
    type = 'file',
    setImg,
    ...otherProps
  } = props;

  const {
    watch,
    formState: { errors },
    setValue
  } = useFormContext();

  // const value = watch(name);
  const value = watch('photo');
  // const error = errors[name]?.message || '';

  // const [ img, setImg ] = React.useState<string | null>(null);

  // const handleFile = (file: File) => {
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImg(reader.result as string);
  //       // setValue(name, reader.result as string, { shouldDirty: true });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // Состояние "drop" используется для подсветки элемента,
  // которая показывает, что в него можно "уронить" файл.
  const [drop, setDrop] = React.useState(false);

  // Cброс класса "drop", когда курсор с файлом покидает область элемента.
  // Без e.preventDefault(); файл откроется в новой вкладке.
  const onDragLeave = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDrop(false);
  };

  // Добавляет класс "drop", когда курсор с файлом попадает в область элемента.
  const onDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDrop(true);
  };

  // onDrop - получит список файлов, которые мы "уронили" на компонент.
  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setDrop(false);
    handleFile(droppedFile);
    // setValue(name, droppedFile, { shouldDirty: true });
  };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     handleFile(event.target.files[0]);
  //     // setValue(name, event.target.files[0], { shouldDirty: true });
  //   }
  // };

  return (
    <label
      className={cn(classes.form__item_upload, { [classes.drop]: drop })}
      onDrop={e => {
        handleDrop(e);
        setValue(name, e.dataTransfer.files[0], { shouldDirty: true });
      }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <div className={cn(classes.labelContainer)}>
        <span className={cn(classes.dropTitle)}>Перетащите файл сюда</span>
        <span className={cn(classes.dropStrip)}>или</span>
        <span className={cn(classes.buttonUpload)}>Выберите файл</span>

        <input
          name={name}
          type={type}
          // value={value}
          value={value?.fileName}
          // onChange={e => handleFileChange(e)}
          onChange={onChange}
          accept=".png, .jpg, .jpeg, .gif"
          ref={ref}
          className={cn(classes.inputFile)}
          {...otherProps}
        />
      </div>
    </label>

    // <label
    //   className={cn(
    //     className,
    //     classes.form__item,
    //     {
    //       [classes.active]: value
    //     },
    //     {
    //       [classes.error]: error !== ''
    //     }
    //   )}
    // >
    //   <input
    //     name={name}
    //     type={type}
    //     required={required}
    //     value={value}
    //     onChange={
    //       onChange
    //         ? e => setValue(name, onChange(e), { shouldDirty: true })
    //         : e => setValue(name, e.target.value, { shouldDirty: true })
    //     }
    //     className={cn(className, classes.input, {
    //       [classes.error]: error !== ''
    //     })}
    //     ref={ref}
    //     {...otherProps}
    //   />

    //   <p
    //     className={cn(className, classes.errorText, {
    //       [classes.error]: error !== ''
    //     })}
    //   >
    //     {typeof error === 'string' && error !== '' ? error : ''}
    //   </p>

    //   {label !== undefined && label !== '' && (
    //     <span
    //       className={cn(
    //         className,
    //         classes.label,
    //         {
    //           [classes.required]: required
    //         },
    //         {
    //           [classes.error]: error !== ''
    //         }
    //       )}
    //     >
    //       {label}
    //     </span>
    //   )}
    // </label>
  );
});

InputFile.displayName = 'InputFile';

export { InputFile };
