'use client';

import { typeAuthFormProps } from '@/features/auth-form/types';
import { useForm } from 'react-hook-form';
import { useState, SetStateAction, ChangeEvent } from 'react';
import Link from 'next/link';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import GoogleIcon from '@/shared/images/icons/google_icon.png';
import VKIcon from '@/shared/images/icons/vk_icon.png';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';

export const AuthForm: React.FC<typeAuthFormProps> = props => {
  const {
    className,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    handleSubmit,
    register,
    errors,
    isValid,
    /*linkGoggleEntryUrl, linkVKEntryUrl,*/
    registrationLinkUrl,
    recoveryLinkUrl
  } = props;

  // для входа с помощью Google(Яндекс)/ВКонтакте оставила пока черновой вариант
  return (
    <form
      className={cn(className, classes.container)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cn(className, classes.entry_choice)}>
        <Link
          className={cn(classes.registration_link)}
          href={registrationLinkUrl}
        >
          Зарегистрироваться
        </Link>
        <p className={cn(classes.entry_link)}>Войти</p>
      </div>

      <Link
        className={cn(className, classes.alternative_link)}
        href={'#' /*linkGoggleEntryUrl*/}
      >
        <Image
          className={cn(classes.image_icon)}
          src={GoogleIcon}
          alt=""
          width={40}
          height={40}
        />
        <p className={cn(classes.text_icon)}>Войти с помощью Google</p>
      </Link>
      <Link
        className={cn(className, classes.alternative_link)}
        href={'#' /*linkVKEntryUrl*/}
      >
        <Image
          className={cn(classes.image_icon)}
          src={VKIcon}
          alt=""
          width={40}
          height={40}
        />
        <p className={cn(classes.text_icon)}>Войти с помощью ВКонтакте</p>
      </Link>

      <div className={cn(classes.separator_container)}>
        <hr className={cn(classes.separator_line)} />
        <p className={cn(classes.separator_text)}>или</p>
        <hr className={cn(classes.separator_line)} />
      </div>
      <div className={cn(classes.inputs_container)}>
        <Input
          label="E-mail"
          type="email"
          value={email}
          handleInputChange={onChangeEmail}
          autoComplete="on"
          error={errors.email?.message}
          {...register('email', {
            required: 'Поле e-mail должно быть обязательно заполнено.',
            pattern: {
              value: /^.+@.+\..+$/,
              message: 'Адрес электронной почты введён некорректно.'
            }
          })}
        />
        <Input
          label="Пароль"
          type="password"
          value={password}
          handleInputChange={onChangePassword}
          error={errors.password?.message}
          {...register('password', {
            required: 'Поле пароль должно быть обязательно заполнено.',
            minLength: {
              value: 8,
              message: 'Пароль должен состоять из не менее чем 8 символов.'
            }
          })}
        />
      </div>
      <div className={cn(className, classes.entry)}>
        <Link
          className={cn(className, classes.forgot_link)}
          href={recoveryLinkUrl}
        >
          <p>Забыли пароль?</p>
        </Link>
        <Button
          className={cn(className, classes.btn)}
          variant="blue"
          type="submit"
          disabled={!isValid}
        >
          <p>Войти</p>
        </Button>
      </div>
    </form>
  );
};
