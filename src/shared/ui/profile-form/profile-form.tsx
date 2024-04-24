'use client';

import { typeProfileFormProps } from '@/shared/ui/profile-form/types';
import { FC, useState, ChangeEvent } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { Input } from '@/shared/ui/input'
import Image from 'next/image';
import { StaticImageData } from 'next/image';

export const ProfileForm: FC<typeProfileFormProps> = props => {
  const { 
    userInfo,
    ...otherProps
  } = props;

  const [value, setValue] = useState<string>('');

  const handleChange = (text: string): void => {
    setValue(text);
    // console.log(text);
  };

  const dateOfBirth = userInfo.dateOfBirth;

  console.log(value);
  


  return (
    <div className={cn(classes.profileForm)}>
      <div className='userInfo'>
        <div className='image'>
          {/* <Image
            className={cn(classes.image)}
            src={userInfo.logo}
            alt="Фото пользователя"
            width={50}
            height={50}
          /> */}
        </div>
      </div>
      {/* <Input
        label="Ваше имя и фамилия:"
        required={true}
        value={value}
        handleInputChange={handleChange}
        name="name"
        className={cn(classes.inputName)}
        type='date'
      /> */}
      <Input
        label="Ваше имя и фамилия:"
        required={true}
        value={value}
        handleInputChange={handleChange}
        name="name"
        className={cn(classes.inputName)}
        type='date'
      />
      {/* <input placeholder="Birth Date" ></input> */}
    </div>
  );
};
