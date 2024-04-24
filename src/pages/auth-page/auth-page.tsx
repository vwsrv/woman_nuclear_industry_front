'use client';

import cn from 'classnames';
import classes from './styles.module.scss';
import { AuthForm } from '@/features/auth-form';
import { SignLayout } from '@/shared/layouts/sign-layout';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { authInputs } from '@/utils/validation';

export const AuthPage: React.FC = () => {
  const methods = useForm({
    defaultValues: Object.fromEntries(
      authInputs.map(input => [input.name, input.defaultValue])
    ),
    mode: 'onBlur'
  });

  const pathname = usePathname();

  const onSubmit = (data: any) => {
    console.log({...data})
  }

  return (
    <div className={cn(classes.authPage)}>
      <SignLayout>
        <FormProvider {...methods}>
          <AuthForm
            inputs={authInputs}
            pathname={pathname}
            onSubmit={methods.handleSubmit(onSubmit)}
            recoveryLinkUrl='./recovery-email'
          />
        </FormProvider>
      </SignLayout>
    </div>
  );
};