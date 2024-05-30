'use client';

import { qustionFormProps } from './types';
import Link from 'next/link';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from '@/shared/ui/checkbox';

export const QustionForm: React.FC<qustionFormProps> = props => {
  const { className, inputs, onSubmit, consent, toggleConsent, ...otherProps } =
    props;

  const {
    control,
    watch,
    formState: { errors }
  } = useFormContext();

  const allFields = watch();
  const checkValuesAllFields = Object.entries(allFields)
    .filter(([key, field]) => field.options && field.options.required) // Фильтруем только обязательные поля
    .every(([key, field]) => !!field.value); // Проверяем, заполнены ли они

  return (
    <form className={styles.qustionform} onSubmit={onSubmit}>
      {inputs.map(input => (
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
              required={!!input.options?.required}
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
      <Button
        className={styles.qustionform__submitButton}
        type="submit"
        variant="violet"
        disabled={
          !consent || Object.keys(errors).length > 0 || !checkValuesAllFields
        }
      >
        Отправить
      </Button>
    </form>
  );
};
