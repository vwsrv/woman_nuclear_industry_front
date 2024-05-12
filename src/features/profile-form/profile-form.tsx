'use client';

import React, { FC, useState, ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import classes from './styles.module.scss';
import cn from 'classnames';
import { typeProfileFormProps } from '@/features/profile-form/types';

import { Input } from '../../shared/ui/input';
import { InputFile } from '@/shared/ui/inputFile';
import { Button } from '../../shared/ui/button';
// import DefaultAvatar from '@/shared/images/for-profile/womanPhoto.png';

export const ProfileForm: FC<typeProfileFormProps> = props => {
  const {
    inputs,
    deleteAvatar,
    changeAvatar,
    // currentUser,
    onSubmit,
    className,
    ...otherProps
  } = props;

  const router = useRouter(); // Для кнопки "Отмена", шаг назад

  const {
    control,
    formState: { isDirty, isValid, defaultValues }, // dirtyFields,
    setValue,
    watch
    // formState,
    // register
  } = useFormContext();

  // console.log('disabled', {isDirty, isValid});
  // console.log('isDirty', isDirty);
  // console.log('isValid', isValid);

  const name = (
    defaultValues?.lastName +
    ' ' +
    defaultValues?.firstName +
    ' ' +
    defaultValues?.patronymic
  ).trim();

  const userAvatar = watch('image');

  // Делим массив Инпутов на 2 части: с 0 по 6 элемент включительно + с 7 и до конца
  const inputPhoto = inputs.slice(0, 1)[0];
  const inputsPrimary = inputs.slice(1, 8);
  const inputsSecondary = inputs.slice(8);

  const [img, setImg] = useState<string | null>(null);

  // const fileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   // Вариант 1.
  //   if (e.target.files && e.target.files[0]) {
  //     setImg(URL.createObjectURL(e.target.files[0]));
  //     setValue(inputs[0].name, e.target.files[0], { shouldDirty: true });
  //   }

  //   // console.log(e);

  //   // Вариант 2. ХЗ какой лучше.
  //   // const file = e.target.files?.[0];
  //   // if (file) {
  //   //   const reader = new FileReader();
  //   //   reader.onload = () => {
  //   //     setImg(reader.result as string);
  //   //   };
  //   //   reader.readAsDataURL(file);

  //   //   reader.onerror = () => {
  //   //     console.log('Error reading file:', reader.error);
  //   //   };
  //   // }
  // }

  // console.log('inputPhoto', inputPhoto);

  const value = watch('photo');

  // ----------------------------

  const handleFile = (file: File) => {
    // if (loading || !file) return;

    // setLoading(true);
    // const uploading = upload<T>(file, url, { onProgress: setProgress });
    // Сохраняем функцию abort
    // abortUploading.current = uploading.abort;
    // uploading
    //   .then(onUpload)
    //   .catch((e) => {})
    //   .finally(reset)

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result as string);
      };
      reader.readAsDataURL(file);

      // reader.onerror = () => {
      //   console.log('Error reading file:', reader.error);
      // };
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (event.target.files && event.target.files[0]) {
      handleFile(event.target.files[0]);

      setValue(field, event.target.files[0], { shouldDirty: true });
    }
  };

  // ----------------------------

  const [drop, setDrop] = useState(false);

  // Мы хотим, чтобы компонент при наведении файла показывал, что в него можно "уронить" файл,
  // и когда мы убираем мышь с компонента, он принимал свое обычное состояние - нам нужно повесить
  // обработчик onDragLeave, который будет срабатывать, когда мышь с файлом покинула компонент.
  // onDragLeave - это тот самый обработчик для сброса отображения drop.
  const onDragLeave = (event: React.DragEvent<HTMLElement>) => {
    // if (disabled) return;
    event.preventDefault();
    setDrop(false);
  };

  // onDragOver должен выполнить e.preventDefault(); иначе файл по умолчанию откроется
  // в новой вкладке браузера.
  const onDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setDrop(true);
  };

  // onDrop, именно он получит список файлов, которые мы "уронили" на компонент, другие
  // обработчики не получают этих данных, если файлы перемещаемы из файловой системы.
  const handleDrop = (event: React.DragEvent<HTMLElement>, field: string) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setDrop(false);

    setValue(field, droppedFile, { shouldDirty: true });
    handleFile(droppedFile);
  };

  // ----------------------------

  return (
    <form className={cn(className, classes.profileForm)} onSubmit={onSubmit}>
      <div>
        <Controller
          key={inputPhoto.name}
          name={inputPhoto.name}
          control={control}
          rules={inputPhoto.options}
          render={({ field }) => (
            // <InputFile
            //   {...field}
            //   // name={field.name}
            //   // onChange={input.handleChange ? input.handleChange : undefined}
            //   // onChange={input?.handleChange} // То же самое, но короче
            //   label={inputPhoto.label}
            //   type={inputPhoto.type}
            //   setImg={setImg}
            //   onChange={handleFileChange}
            //   handleFile={handleFile}
            //   // className={cn(className)}
            // />

            <label
              className={cn(classes.form__item_upload, {
                [classes.drop]: drop
              })}
              onDrop={e => handleDrop(e, field.name)}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
            >
              <div className={cn(classes.labelContainer)}>
                <span className={cn(classes.dropTitle)}>
                  Перетащите файл сюда
                </span>
                <span className={cn(classes.dropStrip)}>или</span>
                <span className={cn(classes.buttonUpload)}>Выберите файл</span>
                {/* <Button
                  className={cn(classes.buttonUpload)}
                  variant="blue"
                  type="button"
                  // onClick={}
                >
                  Выберите файл
                </Button> */}

                <input
                  {...field}
                  name={field.name}
                  type="file"
                  value={value?.fileName}
                  className={cn(classes.inputFile)}
                  // onChange={(e) => handleFileChange(e)}
                  // onChange={(e) => {
                  //   fileChange(e);
                  //   // field.onChange({ target: { value: e.target.files, name: field.name } })
                  //   // setValue(name, e?.target?.files, { shouldDirty: true });
                  // }}
                  onChange={event => {
                    // fileChange(event);
                    handleFileChange(event, field.name);
                    // field.onChange(event.target.files);
                  }}
                  accept=".png, .jpg, .jpeg, .gif"
                />
              </div>
            </label>
          )}
        />

        {img && (
          <Image
            src={img}
            alt="Фото пользователя"
            className={cn(classes.avatar)}
            width={100}
            height={100}
          />
        )}
      </div>

      <br />
      <br />

      <div className={cn(classes.userInfo)}>
        <div className={cn(classes.imageContainer)}>
          <Image
            src={userAvatar}
            alt="Фото пользователя"
            className={cn(classes.avatar)}
          />
          <div className={cn(classes.imageButtonContainer)}>
            <button
              className={cn(classes.imageButton, classes.addAvatar)}
              type="button"
              name="addAvatar"
              onClick={() => {
                console.log('onClick: Add avatar');
              }}
            />
            <button
              className={cn(classes.imageButton, classes.deleteAvatar)}
              type="button"
              name="deleteAvatar"
              onClick={() => {
                deleteAvatar();
                console.log('onClick: Delete avatar');
              }}
            />
          </div>
        </div>
        <div className={cn(classes.info)}>
          <h3 className={cn(classes.name)}>
            {name !== '' ? name : 'Имя пользователя'}
          </h3>
          <p className={cn(classes.description)}>{defaultValues?.bio}</p>
        </div>
      </div>

      <h2 className={cn(classes.headerForm)}>Персональная информация</h2>
      <div className={cn(classes.inputs, classes.primaryInfo)}>
        {inputsPrimary &&
          inputsPrimary.map(input => (
            <Controller
              key={input.name}
              name={input.name}
              control={control}
              rules={input.options}
              render={({ field }) => (
                <div className={cn(className, classes.item)}>
                  <Input
                    {...field}
                    // onChange={input.handleChange ? input.handleChange : undefined}
                    onChange={input?.handleChange} // То же самое, но короче
                    label={input.label}
                    type={input.type}
                    required={input?.options?.required?.value}
                    // className={cn(className)}
                  />
                </div>
              )}
            />
          ))}
      </div>

      {/* <h2 className={cn(classes.headerForm)}>Добавьте информацию о себе</h2>
      <div className={cn(classes.inputs, classes.secondaryInfo)}>
        {inputsSecondary &&
          inputsSecondary.map(input => (
            <Controller
              key={input.name}
              name={input.name}
              control={control}
              rules={input.options}
              render={({ field }) => (
                <div className={cn(className, classes.item)}>
                  <Input
                    {...field}
                    onChange={input?.handleChange}
                    label={input.label}
                    type={input.type}
                    required={input?.options?.required?.value}
                    // className={cn(className)}
                  />
                </div>
              )}
            />
          ))}
      </div> */}

      <div className={cn(classes.buttonsContainer)}>
        <Button
          className={cn(className, classes.button)}
          variant="white"
          type="button"
          onClick={() => router.back()}
        >
          Отменить
        </Button>
        <Button
          // className={cn(className, classes.signupFormSubmitButton)}
          className={cn(className, classes.button)}
          type="submit"
          variant="blue"
          disabled={!isValid || !isDirty}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};
