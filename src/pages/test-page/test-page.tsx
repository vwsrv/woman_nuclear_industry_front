'use client';

// import { Button } from '@/shared/ui/button';
// import { SignupForm } from '@/features/signup-form';
import { ProfileForm } from '@/features/profile-form';

// import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
// import { signupInputs } from '@/utils/validation';
import { profileInputs } from '@/utils/validation';
import DefaultAvatar from '@/shared/images/for-profile/womanPhoto.png';
import DefaultAvatar2 from '@/shared/images/for-profile/woman.png';


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
    image: DefaultAvatar,
  };

  // Временное сохранение данных при отправке формы
  // const [ formValues, setFormValues] = useState({});
  const [ currentUser, setCurrentUser] = useState( userDB );

  // Задаем defaultValues. Стало
  const methods = useForm({
    defaultValues: currentUser,
    mode: 'onBlur',
  })

  const { 
    handleSubmit, 
    reset, 
    formState, 
    formState: {defaultValues}, 
    setValue,
  } = methods;

  const onSumit = (data: any) => {
    // console.log('onSumit', { ...data, consent });
    console.log('onSumit', { ...data });

    setCurrentUser(data);

    // В доке сказано: Рекомендуется выполнить сброс в useEffect, поскольку порядок выполнения имеет значение.
    // https://react-hook-form.com/docs/useform/reset
    // ---
    // В форме сохраняются данные и сбрасывается состояние формы (isDirty), но перестает работать
    // вывод ошибок (isValid отрабатывает правильно, но ошибки в полях не выводятся).
    // reset(data, { keepDirtyValues: true });
  };

  const deleteAvatar = () => {
    setValue('image', DefaultAvatar2, { shouldDirty: true });
    console.log('deleteAvatar');
  }

  // Сброс состояния формы, но в этом случае не запоминаются введенные данные - их придется получать заново.
  React.useEffect(() => {
    // console.log('formState', formState);
    if (formState.isSubmitSuccessful) {
      // Данные формы перезаписываются из useState (или их можно повторно получить с сервера?) 
      // + сбрасываются состояния формы (isDirty и dirtyFields). 
      // reset(formValues, { keepDirtyValues: false });
      reset(currentUser);
      // console.log('reset');
      // Сбрасывает состояние ошибок, и isDirty
      // reset(undefined, { keepDirtyValues: false });
    }
    // if (formState.touchedFields){}
  }, [ formState, reset, currentUser ]);

  return (
    <div style={{padding: '30px'}}> {/* backgroundColor: '#fcc' */}
      {/* <h1>Test page</h1> */}
      {/* <div>
        <Button
          disabled={false}
          className="test-class"
          onClick={() => console.log('Test click')}
        >
          Test button
        </Button>
      </div> */}
      <FormProvider {...methods}>
        <ProfileForm
          inputs={profileInputs}
          // currentUser={currentUser}
          deleteAvatar={deleteAvatar}
          // consent={consent}
          // toggleConsent={toggleConsent}
          onSubmit={handleSubmit(onSumit)}
          className='profile-form'
        />
      </FormProvider>
      {/* <FormProvider {...methods}>
        <SignupForm
          inputs={signupInputs}
          pathname={pathname}
          consent={consent}
          toggleConsent={toggleConsent}
          onSubmit={methods.handleSubmit(onSumit)}
          className='signup-form'
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


