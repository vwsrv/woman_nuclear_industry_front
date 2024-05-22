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
import { Popup } from '../../shared/ui/popup';
import DefaultAvatar from '@/shared/images/for-profile/womanPhoto.png';

export const ProfileForm: FC<typeProfileFormProps> = props => {
  const {
    inputs,
    deleteAvatar,
    previewAvatar,
    setPreviewAvatar,
    setFileUpload,
    onSubmit,
    className,
    ...otherProps
  } = props;

  const router = useRouter(); // Для кнопки "Отмена", шаг назад

  const {
    control,
    formState: { isDirty, isValid, defaultValues },
    setValue
  } = useFormContext();

  // Для подсветки элемента, которая показывает, что в него можно "уронить" файл.
  const [drop, setDrop] = useState<boolean>(false);
  const [isOpenDetails, setOpenDetails] = useState<boolean>(false);

  const fullName = (
    defaultValues?.lastName +
    ' ' +
    defaultValues?.firstName +
    ' ' +
    defaultValues?.patronymic
  ).trim();

  // const userAvatar = watch('image');

  // Делим массив Инпутов на 2 части: с 0 по 6 элемент включительно + с 7 и до конца
  const inputPhoto = inputs.slice(0, 1)[0];
  const inputsPrimary = inputs.slice(1, 8);
  const inputsSecondary = inputs.slice(8);

  const handleUploadedFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const urlImage = URL.createObjectURL(file);
      setPreviewAvatar(urlImage);

      setFileUpload(file);
      setValue(inputPhoto.name, file.lastModified, { shouldDirty: true });
      handleСlosePopup();
    }
  };

  // Cброс класса "drop", когда курсор с файлом покидает область элемента.
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
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDrop(false);

    const droppedFile = e.dataTransfer.files[0];
    const urlImage = URL.createObjectURL(droppedFile);
    setPreviewAvatar(urlImage);

    setFileUpload(droppedFile);
    setValue(inputPhoto.name, droppedFile.lastModified, { shouldDirty: true });
    handleСlosePopup();
  };

  const handleСlosePopup = () => {
    setOpenDetails(false);
  };

  // Нужно добавить проверку есть ли фото в defaultValues.photo и в каком оно формате,
  // и уже по результатам проверки готовить и выводить аватарку вместо DefaultAvatar.

  return (
    <form className={cn(className, classes.profileForm)} onSubmit={onSubmit}>
      {isOpenDetails && (
        <Popup
          isOpen={isOpenDetails}
          onClose={handleСlosePopup}
          isCloseByOverlay={true}
          // title=''
          variant="uploadImage"
        >
          <Controller
            key={inputPhoto.name}
            name={inputPhoto.name}
            control={control}
            // rules={inputPhoto.options}
            render={({ field }) => (
              <InputFile
                {...field}
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
      )}

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
              }}
            />
            <button
              className={cn(classes.imageButton, classes.deleteAvatar)}
              type="button"
              name="deleteAvatar"
              onClick={() => {
                deleteAvatar();
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
      </div>

      <h2 className={cn(classes.headerForm)}>Добавьте информацию о себе</h2>
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
      </div>

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
          className={cn(className, classes.button)}
          // className={cn(className, classes.signupFormSubmitButton)}
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
