'use client';

import { FC, useState } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { Input } from '@/shared/ui/input';
import Link from 'next/link';
import { Checkbox } from '@/shared/ui/checkbox';
import { Button } from '@/shared/ui/button';
import { IFeedbackFormProps } from './types';
import { Controller, useFormContext } from 'react-hook-form';

// TODO: Add a real functional capcha instead of checkbox-example
// TODO: Add a real link to personal data processing agreement

export const FeedbackForm: FC<IFeedbackFormProps> = ({
  isLoggedIn,
  inputs,
  consent,
  toggleConsent,
  onSubmit,
  className,
  ...otherProps
}) => {
  const [checkIsRobot, setCheckIsRobot] = useState<boolean>(false); // Remove after using real captcha

  const {
    watch,
    control,
    formState: { errors }
  } = useFormContext();
  const watchAllFields = watch();
  const checkValuesOfAllFields = () => {
    const allValues = Object.values(watchAllFields);

    if (isLoggedIn) {
      return allValues
        .filter((value, index) => index > 3)
        .every(field => !!field);
    }

    return allValues.every(field => !!field);
  };

  const filteredInputs = isLoggedIn
    ? inputs.filter(input =>
        ['questionTheme', 'questionMessage'].includes(input.name)
      )
    : inputs;

  return (
    <form
      className={cn(className, classes.form)}
      {...otherProps}
      onSubmit={onSubmit}
    >
      {filteredInputs.map((input, index) => (
        <Controller
          key={input.name}
          name={input.name}
          control={control}
          rules={input.options}
          render={({ field }) => (
            <Input
              {...field}
              className={classes.input}
              onChange={input.handleChange ? input.handleChange : undefined}
              label={input.label}
              type={input.type}
              required={input.name === 'questionTheme' ? false : true}
            />
          )}
        />
      ))}
      <div className={cn(classes.capchaContainer)}>
        <Checkbox
          checked={checkIsRobot}
          onCheckboxChange={setCheckIsRobot}
          textSize="l"
          required
        >
          Я не робот
        </Checkbox>
      </div>
      <Checkbox
        checked={consent}
        onCheckboxChange={toggleConsent}
        className={cn(classes.agreeCheckbox)}
        required
      >
        Я согласен на{' '}
        <Link
          href="http://winrussia.com/include/licenses_detail.php"
          target="_blank"
        >
          обработку персональных данных
        </Link>
      </Checkbox>
      <Button
        className={cn(classes.button)}
        type="submit"
        disabled={
          !consent || Object.keys(errors).length > 0 || !checkValuesOfAllFields
        }
      >
        Отправить
      </Button>
    </form>
  );
};
