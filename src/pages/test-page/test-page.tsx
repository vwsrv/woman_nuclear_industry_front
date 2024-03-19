'use client';

import { Button } from '@/shared/ui/button';
import React from 'react';
import { Popup } from '@/shared/ui/popup';
import { ProfileDetails } from '@/shared/ui/profile-details/profile-details';
import profileImage from '../../shared/images/testProfileDetailsImage.png';
import { Accordion } from '@/shared/ui/accordion';
export const TestPage: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const imageUrl =
    'https://img.freepik.com/premium-photo/portrait-of-smiling-doctor-in-white-uniform-standing-with-crossed-hands-on-grey-background_168410-1747.jpg';
  const name = 'Ангелина Потапова';
  const description = [
    'Стаж более 10 лет',
    'Высшее образование',
    'Кандидат биологических наук, автор цифрового контента «Молекула»'
  ];

  const accordionProps = [
    {
      title: 'Информация о пользователе',
      children:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam quis voluptas molestias commodi inventore velit nobis distinctio, consectetur, alias enim. Quisquam reprehenderit, iure sequi rem harum necessitatibus, ratione cumque facilis ipsam est deserunt ullam totam fugiat! Dolor, ratione magni illum reiciendis aut vero rem veniam dignissimos maxime odio consequatur.'
    },
    {
      title: 'Информация о пользователе',
      children:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam quis voluptas molestias commodi inventore velit nobis distinctio, consectetur, alias enim. Quisquam reprehenderit, iure sequi rem harum necessitatibus, ratione cumque facilis ipsam est deserunt ullam totam fugiat! Dolor, ratione magni illum reiciendis aut vero rem veniam dignissimos maxime odio consequatur.'
    },
    {
      title: 'Информация о пользователе',
      children:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam quis voluptas molestias commodi inventore velit nobis distinctio, consectetur, alias enim. Quisquam reprehenderit, iure sequi rem harum necessitatibus, ratione cumque facilis ipsam est deserunt ullam totam fugiat! Dolor, ratione magni illum reiciendis aut vero rem veniam dignissimos maxime odio consequatur.'
    },
    {
      title: 'Информация о пользователе',
      children:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam quis voluptas molestias commodi inventore velit nobis distinctio, consectetur, alias enim. Quisquam reprehenderit, iure sequi rem harum necessitatibus, ratione cumque facilis ipsam est deserunt ullam totam fugiat! Dolor, ratione magni illum reiciendis aut vero rem veniam dignissimos maxime odio consequatur.'
    },
    {
      title: 'Информация о пользователе',
      children:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam quis voluptas molestias commodi inventore velit nobis distinctio, consectetur, alias enim. Quisquam reprehenderit, iure sequi rem harum necessitatibus, ratione cumque facilis ipsam est deserunt ullam totam fugiat! Dolor, ratione magni illum reiciendis aut vero rem veniam dignissimos maxime odio consequatur.'
    },
    {
      title: 'Информация о пользователе',
      children:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam quis voluptas molestias commodi inventore velit nobis distinctio, consectetur, alias enim. Quisquam reprehenderit, iure sequi rem harum necessitatibus, ratione cumque facilis ipsam est deserunt ullam totam fugiat! Dolor, ratione magni illum reiciendis aut vero rem veniam dignissimos maxime odio consequatur.'
    }
  ];

  return (
    <div>
      <h1>Test page</h1>
      <div>
        <Button disabled={false} className="test-class" onClick={onOpen}>
          Test button
        </Button>
        <Popup
          isOpen={isOpen}
          isCloseByOverlay={isOpen}
          onClose={onClose}
          title="Профиль"
        >
          <ProfileDetails
            name={name}
            description={description}
            imageUrl={profileImage}
            profileAbout={<Accordion props={accordionProps} />}
          />
        </Popup>
      </div>
    </div>
  );
};
