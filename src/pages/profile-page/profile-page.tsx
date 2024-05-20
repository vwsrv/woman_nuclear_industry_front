'use client';

import cn from 'classnames';
import classes from './styles.module.scss';
import { ProfileMenu } from '@/shared/ui/profile-menu/profile-menu';
import React from 'react';
import Image from 'next/image';
import avatar from '../../shared/images/for-profile-page/avatar.jpg';

export const ProfilePage: React.FC = () => {
  const [links, setLinks] = React.useState([
    { title: 'Мой профиль', link: '/profile' },
    { title: 'Мои мероприятия', link: '/404' },
    { title: 'Мои подписки', link: '/404' },
    { title: 'Выход', link: '/404', color: 'red' }
  ]);
  const [avatarLink, setAvatarLink] = React.useState(avatar);
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
        <div className={cn(classes['profile-page__grid-wrapper'])}>
          <div className={cn(classes['profile-page__info-card'])}>
            <h3 className={cn(classes['profile-page__info-title'])}>Имя</h3>
            <p className={cn(classes['profile-page__info-field'])}>
              {profileData.name}
            </p>
          </div>
          <div className={cn(classes['profile-page__info-card'])}>
            <h3 className={cn(classes['profile-page__info-title'])}>Фамилия</h3>
            <p className={cn(classes['profile-page__info-field'])}>
              {profileData.surname}
            </p>
          </div>
          <div className={cn(classes['profile-page__info-card'])}>
            <h3 className={cn(classes['profile-page__info-title'])}>
              Электронная почта
            </h3>
            <p className={cn(classes['profile-page__info-field'])}>
              {profileData.email}
            </p>
          </div>
          <div className={cn(classes['profile-page__info-card'])}>
            <h3 className={cn(classes['profile-page__info-title'])}>Телефон</h3>
            <p className={cn(classes['profile-page__info-field'])}>
              {profileData.tel}
            </p>
          </div>
          <div className={cn(classes['profile-page__info-card'])}>
            <h3 className={cn(classes['profile-page__info-title'])}>Bio</h3>
            <p className={cn(classes['profile-page__info-field'])}>
              {profileData.bio}
            </p>
          </div>
          <div className={cn(classes['profile-page__info-card'])}>
            <h3 className={cn(classes['profile-page__info-title'])}>
              Дата рождения
            </h3>
            <p className={cn(classes['profile-page__info-field'])}>
              {profileData.birthDay}
            </p>
          </div>
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
          <div className={cn(classes['profile-page__info-card'])}>
            <h3 className={cn(classes['profile-page__info-title'])}>
              Специализация
            </h3>
            <p className={cn(classes['profile-page__info-field'])}>
              {profileData.specialization}
            </p>
          </div>
          <div className={cn(classes['profile-page__info-card'])}>
            <h3 className={cn(classes['profile-page__info-title'])}>
              Ученая степень
            </h3>
            <p className={cn(classes['profile-page__info-field'])}>
              {profileData.degree}
            </p>
          </div>
          <div className={cn(classes['profile-page__info-card'])}>
            <h3 className={cn(classes['profile-page__info-title'])}>
              Образование
            </h3>
            <p className={cn(classes['profile-page__info-field'])}>
              {profileData.education}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
