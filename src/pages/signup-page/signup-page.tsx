'use client';

import cn from 'classnames';
import classes from './styles.module.scss';
import { SignupForm } from '@/features/signup-form';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { signupInputs } from '@/utils/validation';

export const SignupPage: React.FC = () => {
  const methods = useForm({
    defaultValues: Object.fromEntries(
      signupInputs.map(input => [input.name, input.defaultValue])
    ),
    mode: 'onBlur'
  });

  const pathname = usePathname();
  const [consent, setConsent] = useState(false);
  const [isColumnist, setIsColumnist] = useState(false);

  const toggleConsent = (): void => setConsent(!consent);
  const toggleIsColumnist = (): void => setIsColumnist(!isColumnist);

  const onSubmit = (data: any) => {
    console.log({ ...data, consent });
  };

  return (
    <div className={cn(classes.signupPage)}>
      <FormProvider {...methods}>
        <SignupForm
          inputs={signupInputs}
          pathname={pathname}
          consent={consent}
          toggleConsent={toggleConsent}
          isColumnist={isColumnist}
          toggleIsColumnist={toggleIsColumnist}
          onSubmit={methods.handleSubmit(onSubmit)}
          className="signup-form"
        />
      </FormProvider>
    </div>
  );
};
