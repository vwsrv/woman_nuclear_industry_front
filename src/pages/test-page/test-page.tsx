'use client';

// import { Button } from '@/shared/ui/button';
// import { SignupForm } from '@/features/signup-form';
import { ProfileForm } from '@/features/profile-form';
import { ProfileFormCopy } from '@/features/profile-form-copy';

// import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
// import { signupInputs } from '@/utils/validation';
import { profileInputs } from '@/utils/validation';
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
    photo: undefined
    // photo: '', // Для ProfileFormCopy
  };

  // Временное сохранение данных при отправке формы
  const [currentUser, setCurrentUser] = useState(userDB);
  const [previewAvatar, setPreviewAvatar] = useState<string | undefined>();

  // Задаем defaultValues. Стало
  const methods = useForm({
    defaultValues: currentUser,
    mode: 'onBlur'
  });

  const {
    handleSubmit,
    reset,
    formState,
    formState: { defaultValues, dirtyFields, isDirty },
    setValue
  } = methods;

  const onSumit = (data: any) => {
    console.log('onSumit', { ...data });
    setCurrentUser(data);

    // В доке сказано: Рекомендуется выполнить сброс в useEffect, поскольку порядок выполнения имеет значение:
    // https://react-hook-form.com/docs/useform/reset
    // ---
    // В форме сохраняются данные и сбрасывается состояние формы (isDirty), но перестает работать
    // вывод ошибок (isValid отрабатывает правильно, но ошибки в полях не выводятся).
    // reset(data, { keepDirtyValues: true });
  };

  const handleDeleteAvatar = () => {
    setPreviewAvatar(undefined);
    setValue('photo', undefined, { shouldDirty: true });
    // setValue('photo', '', { shouldDirty: true }); // Для ProfileFormCopy
  };

  // console.log("dirtyFields", dirtyFields);
  console.log('isDirty', isDirty);
  // console.log("formState", formState);

  // Сброс состояния формы, но в этом случае не запоминаются введенные данные - их придется получать заново.
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(currentUser);
      // Данные формы перезаписываются из useState (или их можно/нужно повторно получить с сервера?)
      // + сбрасываются состояния формы (isDirty и dirtyFields).
      // reset(currentUser, { keepDirtyValues: false });
      // Сбрасывает состояние ошибок, и isDirty
      // reset(undefined, { keepDirtyValues: false });
    }
  }, [formState, reset, currentUser]);

  return (
    <div style={{ padding: '30px' }}>
      <FormProvider {...methods}>
        <ProfileForm
          inputs={profileInputs}
          // currentUser={currentUser}
          deleteAvatar={handleDeleteAvatar}
          previewAvatar={previewAvatar}
          setPreviewAvatar={setPreviewAvatar}
          onSubmit={handleSubmit(onSumit)}
          className="profile-form"
        />
      </FormProvider>

      {/* <FormProvider {...methods}>
        <ProfileFormCopy
          inputs={profileInputs}
          // currentUser={currentUser}
          deleteAvatar={handleDeleteAvatar}
          previewAvatar={previewAvatar}
          setPreviewAvatar={setPreviewAvatar}
          onSubmit={handleSubmit(onSumit)}
          className="profile-form"
        />
      </FormProvider> */}
    </div>
  );
};

// -------------------------
// const methods = useForm({
//   defaultValues: Object.fromEntries(
//     // signupInputs.map(input => [input.name, input.defaultValue])
//     profileInputs.map(input => [input.name, input.defaultValue])
//   ),
//   mode: 'onBlur'
// });
// console.log('profileInputs', profileInputs);

// const methods = useForm({
// defaultValues: Object.fromEntries(
//   profileInputs.map(function (input) {
//     const valueFromDB = currentUser[input.name as keyof typeof currentUser];
//     return [input.name, valueFromDB];
//   })
// ),
//   mode: 'onBlur'
// });
// console.log('profileInputs', profileInputs);

// const pathname = usePathname();
// const [ consent, setConsent] = useState(false);
// const toggleConsent = ():void => setConsent(!consent);

// ==============
// // Добавляет в инпуты данные о пользоватле из БД
// const currentUserInputs = profileInputs.map(function (input) {
//   if (currentUser) {
//     input.defaultValue = currentUser[input.name as keyof typeof currentUser];
//   }
//   return input;
// });

// Задаем defaultValues. Было
// const methods = useForm({
//   defaultValues: Object.fromEntries(
//     profileInputs.map(input => [input.name, input.defaultValue])
//     // currentUserInputs.map(input => [input.name, input.defaultValue])
//   ),
//   mode: 'onBlur'
// });
// ==============
