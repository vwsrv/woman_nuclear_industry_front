import cn from 'classnames';
import classes from './styles.module.scss';
import { Input } from '../../shared/ui/input';
import Link from 'next/link';
import { Checkbox } from '../../shared/ui/checkbox';
import { Button } from '../../shared/ui/button';
import { signupFromProps } from './types';
import { Controller, useFormContext } from 'react-hook-form';

export const SignupForm: React.FC<signupFromProps> = ({
  inputs,
  pathname,
  consent,
  toggleConsent,
  onSubmit,
  className
}) => {
  const {
    watch,
    control,
    formState: { errors }
  } = useFormContext();
  const allFields = watch();
  const checkAllFields = Object.values(allFields).every(field => !!field);

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
        disabled={!consent || Object.keys(errors).length > 0 || !checkAllFields}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};
