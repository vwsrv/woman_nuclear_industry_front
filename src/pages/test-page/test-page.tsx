'use client';

// import { Button } from '@/shared/ui/button';
// import { SignupForm } from '@/features/signup-form';
import { ProfileForm } from '@/features/profile-form';

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
// import { signupInputs } from '@/utils/validation';
import { profileInputs } from '@/utils/validation';

export const TestPage: React.FC = () => {

  const currentUser = {
    email: 'email@mail.ru',
    lastName: 'Сидоров',
    firstName: 'Иван',
    patronymic: 'Петрович',
    phone: '+7 (999) 888 - 77 - 11',
    date: '1980-09-10',
    bio: 'Несколькословосебе',
    // image: 'http://',
  };


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

  // Задаем defaultValues. Стало
  const methods = useForm({
    defaultValues: currentUser,
    mode: 'onBlur',
  })
  // ==============

  const { handleSubmit } = methods; // control, 

  const onSumit = (data: any) => {
    // console.log('onSumit', { ...data, consent });
    console.log('onSumit', { ...data });
  };

  return (
    <div>
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
          currentUser={currentUser}
          // control={control}
          // pathname={pathname}
          // consent={consent}
          // toggleConsent={toggleConsent}
          onSubmit={handleSubmit(onSumit)}
          className='signup-form'
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