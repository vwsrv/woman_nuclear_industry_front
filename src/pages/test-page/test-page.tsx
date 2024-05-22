'use client';

import { ProfileForm } from '@/features/profile-form';

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { profileInputs } from '@/utils/validation/forms-options/profile-form';

export const TestPage: React.FC = () => {
  const userDB = {
    email: 'email@mail.ru',
    lastName: 'Лавлейс',
    firstName: 'Августа Ада',
    patronymic: 'Петрович',
    phone: '+7 (999) 888 - 77 - 11',
    date: '1980-09-10',
    bio: 'Москва 125424, г. Москва, Волоколамское шоссе, д. 108, оф. 19',
    specialization: '',
    degree: '',
    education: '',
    photo: ''
  };

  // Временное сохранение данных при отправке формы
  const [currentUser, setCurrentUser] = useState(userDB);
  const [previewAvatar, setPreviewAvatar] = useState<string | undefined>();

  // "fileUpload" используется для временного хранения добавленного в форму файла
  // т.к. если записывать файл фото через setValue после отправки формы перестает
  // работать isDirty - React Hook Form не видит изменений в массиве.
  const [fileUpload, setFileUpload] = useState<File | undefined>();

  // Задаем defaultValues
  const methods = useForm({
    defaultValues: currentUser,
    mode: 'onBlur'
  });

  const { handleSubmit, reset, formState, setValue } = methods;

  const onSumit = (data: any) => {
    // Отправка фото как файла:
    if (fileUpload) {
      data.photo = fileUpload;
    }

    console.log('onSumitCopy', { ...data });
    setCurrentUser(data);

    // Для отправки фото в base64, нужно его загрузить и преобразовать:
    // if (fileUpload) {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       data.photo = reader.result as string;

    //       console.log('onSumitCopy', { ...data });

    //       // Перед тем как расскомментировать нужно добавить читалку base64.
    //       // Сейчас выпадает в ошибку, как мне кажется, потому что страница
    //       // не может прочесть из строки photo то что в ней зашифровано.
    //       // setCurrentUser(data);
    //     };
    //     reader.readAsDataURL(fileUpload);
    // }

    // Сброс (reset) выполнять в useEffect, т.к. порядок выполнения имеет значение:
    // https://react-hook-form.com/docs/useform/reset
  };

  const handleDeleteAvatar = () => {
    setPreviewAvatar(undefined);
    setValue('photo', '', { shouldDirty: true });
    setFileUpload(undefined);
  };

  // Сброс состояния формы. При сбросе введенные ранее данные не запоминаются и
  // их нужно заново получать из userDB или currentUser.
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(currentUser);
    }
  }, [formState, reset, currentUser]);

  return (
    <FormProvider {...methods}>
      <ProfileForm
        inputs={profileInputs}
        deleteAvatar={handleDeleteAvatar}
        previewAvatar={previewAvatar}
        setPreviewAvatar={setPreviewAvatar}
        setFileUpload={setFileUpload}
        onSubmit={handleSubmit(onSumit)}
        className="profile-form"
      />
    </FormProvider>
  );
};
