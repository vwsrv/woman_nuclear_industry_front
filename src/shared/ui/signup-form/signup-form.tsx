import cn from 'classnames';
import classes from './styles.module.scss';
import { Input } from '../input';
import Link from 'next/link';
import { Checkbox } from '../checkbox';
import { Button } from '../button';
import { signupFromProps } from './types';

export const SignupForm: React.FC<signupFromProps> = ({
  pathname,
  consent,
  toggleConsent,
  onSubmit,
  className
}) => {
  return (
    <form className={cn(className, classes.signupForm)} onSubmit={onSubmit}>
      <div className={cn(className, classes.signupFormAuthLinksWrapper)}>
        <Link
          className={cn(className, classes.signupFormAuthLink, {
            [classes.active]: pathname === '/signup'
          })}
          href="/signup"
        >
          Зарегистрироваться
        </Link>
        <Link
          className={cn(className, classes.signupFormAuthLink, {
            [classes.active]: pathname === '/'
          })}
          href="/signin"
        >
          Войти
        </Link>
      </div>
      <div className={cn(className, classes.signupFormExternalWrapper)}>
        <div className={cn(className, classes.signupFormExternalButton)}>
          Google
        </div>
        <div className={cn(className, classes.signupFormExternalButton)}>
          VK
        </div>
      </div>
      <div className={cn(className, classes.signupFormSeparator)}>
        <hr className={cn(className, classes.signupFormSeparatorLine)} />
        <span className={cn(className, classes.signupFormSeparatorText)}>
          или
        </span>
        <hr className={cn(className, classes.signupFormSeparatorLine)} />
      </div>
      <div className={cn(className, classes.signupFormInputsWrapper)}>
        <Input
          registerOptions={{
            pattern: /^.+@.+\..+$/,
            errorMessage: 'Поле e-mail должно быть обязательно заполнено.',
            required: true
          }}
          label="E-mail"
          name="email"
          type="email"
          required
        />
        {/* <Input
          // {...register('firstName', {
          //   min: 2,
          //   required: 'Имя дожно состоять минимум из 2-х символов.'
          // })}
          value={firstName}
          handleInputChange={onChangeFirstName}
          label="Имя"
          name="firstName"
          type="text"
          error={errors.firstName?.message}
          required
        />
        <Input
          // {...register('lastName', {
          //   min: 2,
          //   required: 'Фамилия дожна состоять минимум из 2-х символов.'
          // })}
          value={lastName}
          handleInputChange={onChangeLastName}
          label="Фамилия"
          name="lastName"
          type="text"
          error={errors.lastName?.message}
          required
        />
        <Input
          // {...register('phone', {
          //   pattern: /^(?:\+7|8)\d{10}$/,
          //   required: 'Номер телефона должен начинаться либо с +7 либо с 8.'
          // })}
          value={phone}
          handleInputChange={onChangePhone}
          label="Телефон"
          name="phone"
          type="tel"
          error={errors.phone?.message}
          required
        />
        <Input
          // {...register('date', {
          //   pattern: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/,
          //   required: 'Пожалуйста введите дату в формате дд.мм.ггг.'
          // })}
          value={date}
          handleInputChange={onChangeDate}
          label="ДД.ММ.ГГ"
          name="date"
          type="text"
          error={errors.date?.message}
          required
        />
        <Input
          // {...register('password', {
          //   pattern: /.{8,}/,
          //   required: 'Пароль должен состоять из не менее чем 8 символов.'
          // })}
          value={password}
          handleInputChange={onChangePassword}
          label="Пароль"
          name="password"
          type="password"
          error={errors.password?.message}
          required
        /> */}
        <Checkbox checked={consent} onCheckboxChange={toggleConsent}>
          Я согласен на{' '}
          <Link href="http://winrussia.com/include/licenses_detail.php">
            обработку персональных данных
          </Link>
        </Checkbox>
      </div>
      <Button
        className={cn(className, classes.signupFormSubmitButton)}
        type="submit"
        variant="blue"
        disabled={!consent}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};
