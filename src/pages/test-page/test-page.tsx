'use client';

import { About } from '@/shared/ui/about';
import { Button } from '@/shared/ui/button';
import { SignupForm } from '@/shared/ui/signup-form';
import { usePathname } from 'next/navigation';
import React, { SetStateAction, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

export const TestPage: React.FC = () => {
  const methods = useForm();

  const pathname = usePathname();
  const [consent, setConsent] = useState(false);

  const toggleConsent = (): void => setConsent(!consent);

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <h1>Test page</h1>
      <div>
        <Button disabled={false} className="test-class">
          Test button
        </Button>
      </div>
      <FormProvider {...methods}>
        <SignupForm
          pathname={pathname}
          consent={consent}
          toggleConsent={toggleConsent}
          onSubmit={methods.handleSubmit(onSubmit)}
          className="signup-form"
        />
      </FormProvider>
    </div>
  );
};
