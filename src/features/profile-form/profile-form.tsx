'use client';

// import { FC } from 'react';
// import { FC, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useFormContext } from 'react-hook-form';
import Image from 'next/image';

import classes from './styles.module.scss';
import cn from 'classnames';
import { typeProfileFormProps } from '@/features/profile-form/types';

import { Input } from '../../shared/ui/input';
import { Button } from '../../shared/ui/button';
// import DefaultAvatar from '@/shared/images/for-profile/womanPhoto.png';

// import Image from 'next/image';
// import { StaticImageData } from 'next/image';

export const ProfileForm: React.FC<typeProfileFormProps> = props => {
  const { 
    inputs,
    deleteAvatar,
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
    // formState,
    // register
  } = useFormContext();

  // console.log('disabled', {isDirty, isValid});
  // console.log('isDirty', isDirty);
  // console.log('isValid', isValid);
  
  const name = (defaultValues?.lastName + ' ' + defaultValues?.firstName + ' ' + defaultValues?.patronymic).trim();
  // console.log('defaultValues', name);

  const userAvatar = watch('image');

  // Делим массив Инпутов на 2 части: с 0 по 6 элемент включительно + с 7 и до конца
  const inputsPrimary = inputs.slice(0, 7);
  const inputsSecondary = inputs.slice(7);

  return (
    <form className={cn(className, classes.profileForm)} onSubmit={onSubmit}>
      
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
              name='addAvatar'
              onClick={() => {
                console.log('onClick: Add avatar');
              }}
            />
            <button
              className={cn(classes.imageButton, classes.deleteAvatar)}
              type="button"
              name='deleteAvatar'
              onClick={() => {
                deleteAvatar();
                console.log('onClick: Delete avatar');
              }}
            />
          </div>
        </div>
        <div className={cn(classes.info)}>
          <h3 className={cn(classes.name)}>{ name !== '' ? name : 'Имя пользователя' }</h3>
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
          // className={cn(className, classes.signupFormSubmitButton)}
          className={cn(className, classes.button)}
          type="submit"
          variant="blue"
          disabled={ !isValid || !isDirty }
        >
          Сохранить
        </Button>
      </div>

    </form>
  );
};

