'use client';

import cn from 'classnames';
import classes from './styles.module.scss';
import { ProfileMenu } from '@/shared/ui/profile-menu/profile-menu';
import React from 'react';
import Image from 'next/image';
import avatar from '../../shared/images/for-profile-page/avatar.jpg';
import ProfileFieldList from './profile-field-list';
import { ProfileFieldProps } from './types';

export const ProfilePage: React.FC = () => {
  const [links, setLinks] = React.useState([
    { title: 'Мой профиль', link: '/profile' },
    { title: 'Мои мероприятия', link: '/404' },
    { title: 'Мои подписки', link: '/404' },
    { title: 'Выход', link: '/404', color: 'red' }
  ]);
  const [avatarLink, setAvatarLink] = React.useState(avatar);
  const [mainInfoFields, setMainInfoFields] = React.useState<ProfileFieldProps[]>([]);
  const [extraInfoFields, setExtraInfoFields] = React.useState<ProfileFieldProps[]>([]);
  const [profileData, setProfileData] = React.useState({
    name: 'Ольга',
    surname: 'Иванова',
    fatherName: 'Петровна',
    addres: 'Москва 125424, г. Москва, Волоколамское шоссе, д. 108, оф. 19',
    email: 'anabanana@gmail.com',
    tel: '+99 888 555 44',
    bio: 'Neuroscientist',
    birthDay: '11.12.1995',
    specialization: '',
    degree: '',
    education: ''
  });

  React.useEffect(() => {
    setMainInfoFields([
      {title: 'Имя', value: 'Ольга'},
      {title: 'Фамилия', value: 'Иванова'},
      {title: 'Электронная почта', value: 'anabanana@gmail.com'},
      {title: 'Телефон', value: '+99 888 555 44'},
      {title: 'Bio', value: 'Neuroscientist'},
      {title: 'Дата рождения', value: '11.12.1995'},
    ]);

    setExtraInfoFields([
      {title: 'Специализация'},
      {title: 'Ученая степень'},
      {title: 'Образование'},
    ])
  }, [])

  return (
    <div className={cn(classes['profile-page'])}>
      <ProfileMenu menuItems={links} />
      <section className={cn(classes['profile-page__content'])}>
        <div className={cn(classes['profile-page__wrapper'])}>
          <h2 className={cn(classes['profile-page__title'])}>Мой профиль</h2>
          <button className={cn(classes['profile-page__edit-button'])}>
            Редактировать
          </button>
        </div>
        <div className={cn(classes['profile-page__info-wrapper'])}>
          <Image
            alt="аватар"
            className={cn(classes['profile-page__avatar'])}
            src={avatarLink}
            width={74}
            height={74}
          />
          <div>
            <p
              className={cn(classes['profile-page__name'])}
            >{`${profileData.surname} ${profileData.name} ${profileData.fatherName}`}</p>
            <p className={cn(classes['profile-page__addres'])}>
              {profileData.addres}
            </p>
          </div>
        </div>
        <h2 className={cn(classes['profile-page__title'])}>
          Персональная информация
        </h2>
        <div className={cn(classes['profile-page__grid-wrapper'],)}>
          <ProfileFieldList fields={mainInfoFields}/>
        </div>
        <h2 className={cn(classes['profile-page__title'])}>
          Добавьте информацию о себе
        </h2>
        <div
          className={cn(
            classes['profile-page__grid-wrapper'],
            classes['profile-page__grid-wrapper_extra-info']
          )}
        >
          <ProfileFieldList fields={extraInfoFields}/>
        </div>
      </section>
    </div>
  );
};
