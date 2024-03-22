'use client';

import { Button } from '@/shared/ui/button';
import { FooterMenu } from '@/shared/ui/footer-menu/footer-menu';
import React from 'react';
export const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test page</h1>
      <div>
        <FooterMenu
          footerItem={[
            { link: 'yandex.ru', title: 'Партнеры' },
            { link: 'yandex.ru', title: 'Объединение' },
            { link: 'yandex.ru', title: 'Территория присутствия' },
            { link: 'yandex.ru', title: 'Мероприятия' },
            { link: 'yandex.ru', title: 'Новости' },
            { link: 'yandex.ru', title: 'Проекты' },
            { link: 'yandex.ru', title: 'Контакты' },
            { link: 'yandex.ru', title: 'О сообществе' },
            { link: 'yandex.ru', title: 'Команда' },
            { link: 'yandex.ru', title: 'Амбассадоры' },
            { link: 'yandex.ru', title: 'Международный совет' },
            { link: 'yandex.ru', title: 'Вопрос - ответ' },
            { link: 'yandex.ru', title: 'Проекты' },
          ]}
        />
      </div>
    </div>
  );
};
