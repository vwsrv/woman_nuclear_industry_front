'use client';

import { typeAuthFormProps } from '@/features/auth-form/types';
import Link from 'next/link';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { Controller, useFormContext } from 'react-hook-form';
import VKIcon from '@/shared/images/icons/vk-icon.png';
// import Yandex from '@/shared/images/icons/yandex_icon.png';

// TODO: для входа с помощью Яндекс/ВКонтакте пока черновой вариант, добавить вторую иконку

export const AuthForm: React.FC<typeAuthFormProps> = props => {
  const {
    className,
    inputs,
    pathname,
    onSubmit,
    recoveryLinkUrl,
    ...otherProps
    /* linkYandexEntryUrl, linkVKEntryUrl, */
  } = props;

  const {
    control,
    watch,
    formState: { errors }
  } = useFormContext();
  const allFields = watch();
  const checkValuesAllFields = Object.values(allFields).every(field => !!field);

  return (
    <form className={cn(className, classes.signin_form)} onSubmit={onSubmit}>
      <div className={cn(className, classes.entry_choice)}>
        <Link
          className={cn(classes.registration_link, {
            [classes.active]: pathname === '/signup'
          })}
          href="/signup"
        >
          Зарегистрироваться
        </Link>
        <p className={cn(classes.entry_link)}>Войти</p>
      </div>

      <Link
        className={cn(className, classes.alternative_link)}
        href={'#' /*linkYandexEntryUrl*/}
      >
        <Image
          className={cn(classes.image_icon)}
          src={VKIcon}
          alt=""
          width={40}
          height={40}
        />
        <p className={cn(classes.text_icon)}>Войти с помощью Яндекс ID</p>
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
        {inputs &&
          inputs.map(input => (
            <Controller
              key={input.name}
              name={input.name}
              control={control}
              rules={input.options}
              render={({ field }) => (
                <Input
                  {...field}
                  onChange={input.handleChange ? input.handleChange : undefined}
                  label={input.label}
                  type={input.type}
                  required
                />
              )}
            />
          ))}
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
          disabled={Object.keys(errors).length > 0 || !checkValuesAllFields}
        >
          <p>Войти</p>
        </Button>
      </div>
    </form>
  );
};
