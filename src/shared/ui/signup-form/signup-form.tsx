'use client';

import cn from 'classnames';
import classes from './styles.module.scss';
import { Input } from '../input';
import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import { Checkbox } from '../checkbox';
import { Button } from '../button';
import { ExternalSignButtons } from '@/shared/ui/external-sign-buttons';
import { usePathname } from 'next/navigation';

export const SignupForm: React.FC = () => {
  const pathname = usePathname();

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');
  const [consent, setConsent] = useState(false);

  const onChangeEmail = (newValue: SetStateAction<string>) =>
    setEmail(newValue);

  const onChangeFullName = (newValue: SetStateAction<string>) =>
    setFullName(newValue);

  const onChangePhone = (newValue: SetStateAction<string>) =>
    setPhone(newValue);

  const onChangeDate = (newValue: SetStateAction<string>) => setDate(newValue);

  const onChangePassword = (newValue: SetStateAction<string>) =>
    setPassword(newValue);

  const toggleConsent = (): void => setConsent(!consent);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('submit');
  };

  return (
    <form className={cn(classes.signupForm)} onSubmit={handleSubmit} action="">
      <div className={cn(classes.signupFormAuthLinksWrapper)}>
        <Link
          className={cn(classes.signupFormAuthLink, {
            [classes.active]: pathname === '/'
          })}
          href="/"
        >
          Зарегистрироваться
        </Link>
        <Link
          className={cn(classes.signupFormAuthLink, {
            [classes.active]: pathname === '/signin'
          })}
          href="signup"
        >
          Войти
        </Link>
      </div>
      <div className={cn(classes.signupFormInputsWrapper)}>
        <ExternalSignButtons />
        <div className={cn(classes.signupFormSeparator)}>
          <hr className={cn(classes.signupFormSeparatorLine)} />
          <span className={cn(classes.signupFormSeparatorText)}>или</span>
          <hr className={cn(classes.signupFormSeparatorLine)} />
        </div>
        <Input
          value={email}
          handleInputChange={onChangeEmail}
          label="E-mail"
          name="email"
          type="email"
        />
        <Input
          value={fullName}
          handleInputChange={onChangeFullName}
          label="ФИО"
          name="fullName"
          type="text"
        />
        <Input
          value={phone}
          handleInputChange={onChangePhone}
          label="Телефон"
          name="phone"
          type="tel"
        />
        <Input
          value={date}
          handleInputChange={onChangeDate}
          label="ДД.ММ.ГГ"
          name="email"
          type="email"
        />
        <Input
          value={password}
          handleInputChange={onChangePassword}
          label="Пароль"
          name="password"
          type="password"
        />
        <Checkbox checked={consent} onCheckboxChange={toggleConsent}>
          Я согласен на{' '}
          <Link href="http://winrussia.com/include/licenses_detail.php">
            обработку персональных данных
          </Link>
        </Checkbox>
      </div>
      <Button type="submit" variant="blue" disabled={!consent}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
