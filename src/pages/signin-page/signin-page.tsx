'use client';

import cn from 'classnames';
import classes from './styles.module.scss';
import { AuthForm } from '@/features/auth-form';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { authInputs } from '@/utils/validation';

export const SigninPage: React.FC = () => {
  const methods = useForm({
    defaultValues: Object.fromEntries(
      authInputs.map(input => [input.name, input.defaultValue])
    ),
    mode: 'onBlur'
  });

  const pathname = usePathname();

  const onSubmit = (data: any) => {
    console.log({ ...data });
  };

  return (
    <div className={cn(classes.signinPage)}>
      <FormProvider {...methods}>
        <AuthForm
          inputs={authInputs}
          pathname={pathname}
          onSubmit={methods.handleSubmit(onSubmit)}
          recoveryLinkUrl="./forgot-password"
        />
      </FormProvider>
    </div>
  );
};
