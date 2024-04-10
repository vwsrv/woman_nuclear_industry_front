'use client';

import { About } from '@/shared/ui/about';
import { Button } from '@/shared/ui/button';
import { SignupForm } from '@/shared/ui/signup-form';
import { usePathname } from 'next/navigation';
import React, { SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';

export const TestPage: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm();

  const pathname = usePathname();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');
  const [consent, setConsent] = useState(false);

  const onChangeEmail = (newValue: SetStateAction<string>) => {
    setValue('email', newValue);
    setEmail(newValue);
  };

  const onChangeFirstName = (newValue: SetStateAction<string>) => {
    setValue('firstName', newValue);
    setFirstName(newValue);
  };

  const onChangeLastName = (newValue: SetStateAction<string>) => {
    setValue('lastName', newValue);
    setLastName(newValue);
  };

  const onChangePhone = (newValue: SetStateAction<string>) => {
    setValue('phone', newValue);
    setPhone(newValue);
  };

  const onChangeDate = (newValue: string) => {
    setValue('date', newValue);
    setDate(newValue);
  };

  const onChangePassword = (newValue: SetStateAction<string>) => {
    setValue('password', newValue);
    setPassword(newValue);
  };

  const toggleConsent = (): void => setConsent(!consent);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Test page</h1>
      <div>
        <Button disabled={false} className="test-class">
          Test button
        </Button>
      </div>
      <SignupForm
        pathname={pathname}
        email={email}
        onChangeEmail={onChangeEmail}
        firstName={firstName}
        onChangeFirstName={onChangeFirstName}
        lastName={lastName}
        onChangeLastName={onChangeLastName}
        phone={phone}
        onChangePhone={onChangePhone}
        date={date}
        onChangeDate={onChangeDate}
        password={password}
        onChangePassword={onChangePassword}
        consent={consent}
        toggleConsent={toggleConsent}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        className="signup-form"
      />
    </div>
  );
};
