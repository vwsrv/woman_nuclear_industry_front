'use client';

// import { FC } from 'react';
// import { FC, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useFormContext } from 'react-hook-form';

import classes from './styles.module.scss';
import cn from 'classnames';
import { typeProfileFormProps } from '@/features/profile-form/types';

import { InputNew } from '../../shared/ui/input-new';
import { Button } from '../../shared/ui/button';

// import Image from 'next/image';
// import { StaticImageData } from 'next/image';

export const ProfileForm: React.FC<typeProfileFormProps> = props => {
  const {
    inputs,
    currentUser,
    onSubmit,
    className, 
    ...otherProps} = props;

    const router = useRouter();

    const {
      watch,
      control,
      formState: { errors, isDirty, isValid }
    } = useFormContext();
    
    console.log('isDirty', isDirty);
    // console.log('isValid', isValid);
    

    // const allFields = watch();
    // const checkValuesAllFields = Object.values(allFields).every(field => !!field); // просмотр наличия значений сразу во всех полях
  
    // console.log('inputs', inputs)
    // console.log('allFields', allFields);
    

    // {console.log('inputs', inputs)}
    // Сделать проверку "defaultValues" != FieldValues
    // Сделать проверку, что все reqered заполнены
    // + проверка, что нет ошибок

    // Делим массив Инпутов на 2 части: с 0 по 6 элемент включительно + с 7 и до конца
    const inputsPrimary = inputs.slice(0, 7);
    const inputsSecondary = inputs.slice(7);

    const handleChange = () => {
      handleChange;

    }

  return (
    <form className={cn(className, classes.profileForm)} onSubmit={onSubmit}>

    {/* <div className={cn(className, classes.profileForm)}> */}
      <div className="userInfo">
        <div className="image">
          {/* <Image
            className={cn(classes.image)}
            src={userInfo.logo}
            alt="Фото пользователя"
            width={50}
            height={50}
          /> */}
        </div>
      </div>
      <h3 className={cn(classes.header)}>Персональная информация</h3>
      <div className={cn(classes.inputs, classes.primaryInfo)}>
        {inputsPrimary &&
          inputsPrimary.map(input => (
            <Controller
              key={input.name}
              name={input.name}
              control={control}
              rules={input.options}
              render={({ field }) => (
                <InputNew
                  {...field}
                  // value={field.value}
                  // onChange={field.onChange}
                  // onChange={input.handleChange ? input.handleChange : field.onChange}
                  // onChange={input.handleChange ? input.handleChange : undefined}
                  onChange={input?.handleChange}
                  label={input.label}
                  type={input.type}
                  required={input?.options?.required?.value}
                />
                // <Input
                //   // {...field}
                //   onChange={onChange}
                //   value={value}
                //   // onBlur={field.onBlur}
                //   // onChange={input.handleChange ? input.handleChange : undefined}
                //   // onChange={input.handleChange && input.handleChange }
                //   // onChange={input?.handleChange}
                //   label={input.label}
                //   type={input.type}
                //   required={input?.options?.required?.value}
                //   // defaultValue={input.defaultValue}
                //   // className={cn(className, classes.iiinpt)}
                // />
              )}
            />
          ))}
      </div>

      {/* <h3 className={cn(classes.header)}>Добавьте информацию о себе</h3>
      <div className={cn(classes.inputs, classes.secondaryInfo)}>
        {inputsSecondary &&
          inputsSecondary.map(input => (
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
                  required={input?.options?.required?.value}
                  // className={cn(className, classes.iiinpt)}
                />
              )}
            />
          ))}
      </div> */}
      <Button
        className={cn(className, classes.button)}
        variant="white"
        type="button"
        onClick={() => router.back()}
      >
        Отменить
      </Button>
      <Button
        // className={cn(className, classes.signupFormSubmitButton)}
        className={cn(className, classes.button)}
        type="submit"
        variant="blue"
        disabled={
          // Object.keys(errors).length > 0 || !checkValuesAllFields
          !isValid || !isDirty
        }
      >
        Сохранить
      </Button>
    {/* </div> */}
    </form>
  );
};


  // const { userInfo, ...otherProps } = props;

  // const [value, setValue] = useState<string>('');

  // const handleChange = (text: string): void => {
  //   setValue(text);
  //   // console.log(text);
  // };

  // const dateOfBirth = userInfo.dateOfBirth;

  // console.log(value);


// <Input
//   label="Ваше имя и фамилия:"
//   required={true}
//   value={value}
//   handleInputChange={handleChange}
//   name="name"
//   className={cn(classes.inputName)}
//   type='date'
// />
// <Input
//   label="Ваше имя и фамилия:"
//   required={true}
//   value={value}
//   // handleInputChange={handleChange}
//   name="name"
//   className={cn(classes.inputName)}
//   type="date"
// />
// <input placeholder="Birth Date" ></input>