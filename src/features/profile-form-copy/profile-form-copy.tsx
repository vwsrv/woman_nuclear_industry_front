'use client';

import React, { FC, useState, ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import classes from './styles.module.scss';
import cn from 'classnames';
import { typeProfileFormPropsCopy } from '@/features/profile-form-copy/types';

import { Input } from '../../shared/ui/input';
import { InputFile } from '@/shared/ui/inputFile';
import { Button } from '../../shared/ui/button';
import { Popup } from '../../shared/ui/popup';
import DefaultAvatar from '@/shared/images/for-profile/womanPhoto.png';

export const ProfileFormCopy: FC<typeProfileFormPropsCopy> = props => {
  const {
    inputs,
    deleteAvatar,
    previewAvatar,
    setPreviewAvatar,
    setFileUpload,
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
    watch,
    resetField
    // register,
  } = useFormContext();

  // Для подсветки элемента, которая показывает, что в него можно "уронить" файл.
  const [drop, setDrop] = useState(false);

  const fullName = (
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

  // const value = watch('photo');
  // console.log('value', value);

  // const handleFile = (file: File) => {
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setPreviewAvatar(reader.result as string);
  //       setValue(inputPhoto.name, reader.result as string, { shouldDirty: true });
  //       // console.log('reader.result as string', reader.result as string)
  //       // console.log('inputPhoto.name', inputPhoto.name)

  //     };
  //     reader.readAsDataURL(file);

  //     // reader.onerror = () => {
  //     //   console.log('Error reading file:', reader.error);
  //     // };
  //   }
  // };

  // const handleUploadedFile = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     // const urlImage = URL.createObjectURL(file);
  //     // setPreviewAvatar(urlImage);

  //     // setValue(inputPhoto.name, file, { shouldDirty: true });
  //     handleFile(file);
  //   }
  // };

  // ----------------------------

  const handleUploadedFile = (e: ChangeEvent<HTMLInputElement>) => {
    // const handleUploadedFile = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const urlImage = URL.createObjectURL(file);
      setPreviewAvatar(urlImage);

      setFileUpload(file);
      setValue(inputPhoto.name, file.lastModified, { shouldDirty: true });
      handleСlosePopup();
    }
  };

  // ----------------------------

  // Cброс класса "drop", когда курсор с файлом покидает область элемента.
  // Без e.preventDefault(); файл откроется в новой вкладке.
  const onDragLeave = (event: React.DragEvent<HTMLElement>) => {
    // if (disabled) return;
    event.preventDefault();
    setDrop(false);
  };

  // Добавляет класс "drop", когда курсор с файлом попадает в область элемента.
  const onDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setDrop(true);
  };

  // onDrop - получит список файлов, которые мы "уронили" на компонент.
  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setDrop(false);

    const droppedFile = event.dataTransfer.files[0];
    const urlImage = URL.createObjectURL(droppedFile);
    setPreviewAvatar(urlImage);

    setFileUpload(droppedFile);
    setValue(inputPhoto.name, droppedFile.lastModified, { shouldDirty: true });
    handleСlosePopup();
  };

  // ----------------------------
  const [isOpenDetails, setOpenDetails] = useState<boolean>(false);
  const handleСlosePopup = () => {
    setOpenDetails(false);
  };

  return (
    <form className={cn(className, classes.profileForm)} onSubmit={onSubmit}>
      <Popup
        isOpen={isOpenDetails}
        onClose={handleСlosePopup}
        isCloseByOverlay={true}
        title=""
      >
        <Controller
          key={inputPhoto.name}
          name={inputPhoto.name}
          control={control}
          rules={inputPhoto.options}
          render={({ field }) => (
            <InputFile
              {...field}
              // name={field.name}
              label={inputPhoto.label}
              type={inputPhoto.type}
              drop={drop}
              handleUploadedFile={handleUploadedFile}
              handleDrop={handleDrop}
              dragOver={onDragOver}
              dragLeave={onDragLeave}
              setPreviewAvatar={setPreviewAvatar}
              // className={cn(className)}
            />
          )}
        />
      </Popup>

      <div className={cn(classes.userInfo)}>
        <div className={cn(classes.imageContainer)}>
          {previewAvatar ? (
            <Image
              src={previewAvatar}
              alt="Фото пользователя"
              className={cn(classes.avatar)}
              width={100}
              height={100}
            />
          ) : (
            <Image
              src={DefaultAvatar}
              alt="Фото пользователя"
              className={cn(classes.avatar)}
              width={100}
              height={100}
            />
          )}
          <div className={cn(classes.imageButtonContainer)}>
            <button
              className={cn(classes.imageButton, classes.addAvatar)}
              type="button"
              name="addAvatar"
              onClick={() => {
                setOpenDetails(true);
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
            {fullName !== '' ? fullName : 'Имя пользователя'}
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
