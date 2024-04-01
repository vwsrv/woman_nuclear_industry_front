import cn from 'classnames';
import classes from './styles.module.scss';
import { Input } from '../input';
import Link from 'next/link';
import { Checkbox } from '../checkbox';
import { Button } from '../button';
import { signupFromProps } from './types';

export const SignupForm: React.FC<signupFromProps> = ({
  pathname,
  email,
  onChangeEmail,
  fullName,
  onChangeFullName,
  phone,
  onChangePhone,
  date,
  onChangeDate,
  password,
  onChangePassword,
  consent,
  toggleConsent,
  handleSubmit
}) => {
  return (
    <form className={cn(classes.signupForm)} onSubmit={handleSubmit} action="">
      <div className={cn(classes.signupFormAuthLinksWrapper)}>
        <Link
          className={cn(classes.signupFormAuthLink, {
            [classes.active]: pathname === '/signup'
          })}
          href="/signup"
        >
          Зарегистрироваться
        </Link>
        <Link
          className={cn(classes.signupFormAuthLink, {
            [classes.active]: pathname === '/'
          })}
          href="/signin"
        >
          Войти
        </Link>
      </div>
      <div className={cn(classes.signupFormExternalWrapper)}>
        <div className={cn(classes.signupFormExternalButton)}>Google</div>
        <div className={cn(classes.signupFormExternalButton)}>VK</div>
      </div>
      <div className={cn(classes.signupFormSeparator)}>
        <hr className={cn(classes.signupFormSeparatorLine)} />
        <span className={cn(classes.signupFormSeparatorText)}>или</span>
        <hr className={cn(classes.signupFormSeparatorLine)} />
      </div>
      <div className={cn(classes.signupFormInputsWrapper)}>
        <Input
          value={email}
          handleInputChange={onChangeEmail}
          label="E-mail"
          name="email"
          type="email"
          required
        />
        <Input
          value={fullName}
          handleInputChange={onChangeFullName}
          label="ФИО"
          name="fullName"
          type="text"
          required
        />
        <Input
          value={phone}
          handleInputChange={onChangePhone}
          label="Телефон"
          name="phone"
          type="tel"
          required
        />
        <Input
          value={date}
          handleInputChange={onChangeDate}
          label="ДД.ММ.ГГ"
          name="date"
          type="text"
          required
        />
        <Input
          value={password}
          handleInputChange={onChangePassword}
          label="Пароль"
          name="password"
          type="password"
          required
        />
        <Checkbox checked={consent} onCheckboxChange={toggleConsent}>
          Я согласен на{' '}
          <Link href="http://winrussia.com/include/licenses_detail.php">
            обработку персональных данных
          </Link>
        </Checkbox>
      </div>
      <Button
        className={cn(classes.signupFormSubmitButton)}
        type="submit"
        variant="blue"
        disabled={!consent}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};
