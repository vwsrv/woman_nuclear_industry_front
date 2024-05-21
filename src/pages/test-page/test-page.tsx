'use client';

// import { Button } from '@/shared/ui/button';
// import { SignupForm } from '@/features/signup-form';
import { ProfileForm } from '@/features/profile-form';
import { ProfileFormCopy } from '@/features/profile-form-copy';

// import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
// import { signupInputs } from '@/utils/validation';
import { profileInputs } from '@/utils/validation/forms-options/profile-form';
// import DefaultAvatar from '@/shared/images/for-profile/womanPhoto.png';
// import DefaultAvatar2 from '@/shared/images/for-profile/woman.png';

export const TestPage: React.FC = () => {
  const userDB = {
    email: 'email@mail.ru',
    lastName: 'Лавлейс',
    firstName: 'Августа Ада',
    patronymic: 'Петрович',
    phone: '+7 (999) 888 - 77 - 11',
    date: '1980-09-10',
    bio: 'Москва 125424, г. Москва, Волоколамское шоссе, д. 108, оф. 19',
    // specialization: '',
    // degree: '',
    // education: '',
    // photo: undefined
    photo: '' // Для ProfileFormCopy
  };

  // Временное сохранение данных при отправке формы
  const [currentUser, setCurrentUser] = useState(userDB);
  const [previewAvatar, setPreviewAvatar] = useState<string | undefined>();

  // "fileUpload" используется т.к. если записывать файл фото через setValue
  // после отправки формы перестает работать isDirty - React Hook Form не видит
  // меняются ли значения в массиве.
  const [fileUpload, setFileUpload] = useState<File | undefined>();

  // Задаем defaultValues. Стало
  const methods = useForm({
    defaultValues: currentUser,
    mode: 'onBlur'
  });

  const {
    handleSubmit,
    reset,
    formState,
    // formState: { defaultValues, dirtyFields, isDirty },
    setValue
  } = methods;

  const onSumit = (data: any) => {
    // (data: any, e: any)
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

    //       // Перед тем как это делать нужно добавить читалку base64.
    //       // Сейчас выпадает в ошибку, как мне кажется, потому что страница не может прочесть из
    //       // строки photo то что в ней зашифровано.
    //       // setCurrentUser(data);
    //     };
    //     reader.readAsDataURL(fileUpload);
    // }

    // Сброс (reset) выполнять в useEffect, т.к. порядок выполнения имеет значение:
    // https://react-hook-form.com/docs/useform/reset
  };

  const handleDeleteAvatar = () => {
    setPreviewAvatar(undefined);
    // setValue('photo', undefined, { shouldDirty: true });
    setValue('photo', '', { shouldDirty: true }); // Для ProfileFormCopy
    setFileUpload(undefined);
  };

  // Сброс состояния формы, но в этом случае не запоминаются введенные данные - их придется получать заново.
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(currentUser);
    }
  }, [formState, reset, currentUser]);

  return (
    <div style={{ padding: '30px' }}>
      {/* <FormProvider {...methods}>
        <ProfileForm
          inputs={profileInputs}
          // currentUser={currentUser}
          deleteAvatar={handleDeleteAvatar}
          previewAvatar={previewAvatar}
          setPreviewAvatar={setPreviewAvatar}
          onSubmit={handleSubmit(onSumit)}
          className="profile-form"
        />
      </FormProvider> */}

      <FormProvider {...methods}>
        <ProfileFormCopy
          inputs={profileInputs}
          // currentUser={currentUser}
          deleteAvatar={handleDeleteAvatar}
          previewAvatar={previewAvatar}
          setPreviewAvatar={setPreviewAvatar}
          setFileUpload={setFileUpload}
          onSubmit={handleSubmit(onSumit)}
          className="profile-form"
        />
      </FormProvider>
    </div>
  );
};
