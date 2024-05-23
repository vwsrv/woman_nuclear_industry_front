'use client';

import React, { useState } from 'react';
import styles from './index.module.scss';
import { Button } from '@/shared/ui/button';
import cn from 'classnames';
import { Pagination } from '@/shared/ui/pagination';

export const MediatekaPage: React.FC = () => {
  const [isLivesShown, setIsLivesShown] = useState(false);
  // Состояние для отслеживания количества отображаемых элементов
  const [visibleLivesCount, setVisibleLivesCount] = useState(3);
  const [activePage, setActivePage] = useState(1);
  const [visibleMoviesCount, setVisibleMoviesCount] = useState<9 | 18 | 30>(9);
  const toggleLivesDisplay = () => {
    if (visibleLivesCount === 3) {
      setIsLivesShown(true);
      setVisibleLivesCount(lives.length); // Показать все элементы
    } else {
      setIsLivesShown(false);
      setVisibleLivesCount(3); // Показать только первые три элемента
    }
  };

  const [lives, setLives] = useState([
    {
      id: 1,
      title: 'Введение в React',
      description:
        'Уроки по React для начинающих. Познакомьтесь с основами React и создайте свой первый проект.',
      videoUrl: 'https://www.youtube.com/watch?v=sBws8MSXN7A',
      thumbnailUrl: 'https://img.youtube.com/vi/sBws8MSXN7A/0.jpg',
      publishedDate: '2023-04-01',
      duration: '00:30:00'
    },
    {
      id: 2,
      title: 'JavaScript для начинающих',
      description:
        'Изучите основы JavaScript, который является основой для разработки веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      thumbnailUrl: 'https://img.youtube.com/vi/W6NZfCO5SIk/0.jpg',
      publishedDate: '2023-04-05',
      duration: '00:45:00'
    },
    {
      id: 3,
      title: 'Создание веб-сайта с Next.js',
      description:
        'Узнайте, как быстро создать современный веб-сайт с использованием Next.js, популярного фреймворка для React.',
      videoUrl: 'https://www.youtube.com/watch?v=IkOVe40Sy0U',
      thumbnailUrl: 'https://img.youtube.com/vi/IkOVe40Sy0U/0.jpg',
      publishedDate: '2023-04-10',
      duration: '00:50:00'
    },
    {
      id: 4,
      title: 'Введение в Vue.js',
      description:
        'Основы Vue.js для быстрого старта в разработке веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=4deVCNJq3qc',
      thumbnailUrl: 'https://img.youtube.com/vi/4deVCNJq3qc/0.jpg',
      publishedDate: '2023-04-15',
      duration: '00:35:00'
    },
    {
      id: 5,
      title: 'Погружение в TypeScript',
      description:
        'Изучите TypeScript, статически типизированный язык программирования, который расширяет JavaScript.',
      videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
      thumbnailUrl: 'https://img.youtube.com/vi/BwuLxPH8IDs/0.jpg',
      publishedDate: '2023-04-20',
      duration: '00:40:00'
    }
  ]);

  const [movieList, setMovieList] = useState([
    {
      id: 1,
      title: 'Введение в React',
      description:
        'Уроки по React для начинающих. Познакомьтесь с основами React и создайте свой первый проект.',
      videoUrl: 'https://www.youtube.com/watch?v=sBws8MSXN7A',
      thumbnailUrl: 'https://img.youtube.com/vi/sBws8MSXN7A/0.jpg',
      publishedDate: '2023-04-01',
      duration: '00:30:00'
    },
    {
      id: 2,
      title: 'JavaScript для начинающих',
      description:
        'Изучите основы JavaScript, который является основой для разработки веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      thumbnailUrl: 'https://img.youtube.com/vi/W6NZfCO5SIk/0.jpg',
      publishedDate: '2023-04-05',
      duration: '00:45:00'
    },
    {
      id: 3,
      title: 'Создание веб-сайта с Next.js',
      description:
        'Узнайте, как быстро создать современный веб-сайт с использованием Next.js, популярного фреймворка для React.',
      videoUrl: 'https://www.youtube.com/watch?v=IkOVe40Sy0U',
      thumbnailUrl: 'https://img.youtube.com/vi/IkOVe40Sy0U/0.jpg',
      publishedDate: '2023-04-10',
      duration: '00:50:00'
    },
    {
      id: 4,
      title: 'Введение в Vue.js',
      description:
        'Основы Vue.js для быстрого старта в разработке веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=4deVCNJq3qc',
      thumbnailUrl: 'https://img.youtube.com/vi/4deVCNJq3qc/0.jpg',
      publishedDate: '2023-04-15',
      duration: '00:35:00'
    },
    {
      id: 5,
      title: 'Погружение в TypeScript',
      description:
        'Изучите TypeScript, статически типизированный язык программирования, который расширяет JavaScript.',
      videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
      thumbnailUrl: 'https://img.youtube.com/vi/BwuLxPH8IDs/0.jpg',
      publishedDate: '2023-04-20',
      duration: '00:40:00'
    },
    {
      id: 6,
      title: 'Введение в Node.js',
      description:
        'Узнайте, как создавать серверные приложения с использованием Node.js.',
      videoUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
      thumbnailUrl: 'https://img.youtube.com/vi/TlB_eWDSMt4/0.jpg',
      publishedDate: '2023-04-25',
      duration: '00:45:00'
    },
    {
      id: 7,
      title: 'Использование Express.js для создания API',
      description:
        'Создавайте RESTful API с использованием Express.js, популярного фреймворка для Node.js.',
      videoUrl: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
      thumbnailUrl: 'https://img.youtube.com/vi/L72fhGm1tfE/0.jpg',
      publishedDate: '2023-05-01',
      duration: '00:50:00'
    },
    {
      id: 8,
      title: 'Введение в GraphQL',
      description:
        'Изучите GraphQL, мощный язык запросов для API, который позволяет клиентам определять структуру данных, которую они хотят получить.',
      videoUrl: 'https://www.youtube.com/watch?v=7giZGFDGnkc',
      thumbnailUrl: 'https://img.youtube.com/vi/7giZGFDGnkc/0.jpg',
      publishedDate: '2023-05-05',
      duration: '00:35:00'
    },
    {
      id: 9,
      title: 'Создание веб-приложения с использованием React и GraphQL',
      description:
        'Узнайте, как создать веб-приложение с использованием React на фронтенде и GraphQL на бэкенде.',
      videoUrl: 'https://www.youtube.com/watch?v=4_ZiJGY5F38',
      thumbnailUrl: 'https://img.youtube.com/vi/7giZGFDGnkc/0.jpg',
      publishedDate: '2023-05-10',
      duration: '00:40:00'
    },
    {
      id: 1,
      title: 'Введение в React',
      description:
        'Уроки по React для начинающих. Познакомьтесь с основами React и создайте свой первый проект.',
      videoUrl: 'https://www.youtube.com/watch?v=sBws8MSXN7A',
      thumbnailUrl: 'https://img.youtube.com/vi/sBws8MSXN7A/0.jpg',
      publishedDate: '2023-04-01',
      duration: '00:30:00'
    },
    {
      id: 2,
      title: 'JavaScript для начинающих',
      description:
        'Изучите основы JavaScript, который является основой для разработки веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      thumbnailUrl: 'https://img.youtube.com/vi/W6NZfCO5SIk/0.jpg',
      publishedDate: '2023-04-05',
      duration: '00:45:00'
    },
    {
      id: 3,
      title: 'Создание веб-сайта с Next.js',
      description:
        'Узнайте, как быстро создать современный веб-сайт с использованием Next.js, популярного фреймворка для React.',
      videoUrl: 'https://www.youtube.com/watch?v=IkOVe40Sy0U',
      thumbnailUrl: 'https://img.youtube.com/vi/IkOVe40Sy0U/0.jpg',
      publishedDate: '2023-04-10',
      duration: '00:50:00'
    },
    {
      id: 4,
      title: 'Введение в Vue.js',
      description:
        'Основы Vue.js для быстрого старта в разработке веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=4deVCNJq3qc',
      thumbnailUrl: 'https://img.youtube.com/vi/4deVCNJq3qc/0.jpg',
      publishedDate: '2023-04-15',
      duration: '00:35:00'
    },
    {
      id: 5,
      title: 'Погружение в TypeScript',
      description:
        'Изучите TypeScript, статически типизированный язык программирования, который расширяет JavaScript.',
      videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
      thumbnailUrl: 'https://img.youtube.com/vi/BwuLxPH8IDs/0.jpg',
      publishedDate: '2023-04-20',
      duration: '00:40:00'
    },
    {
      id: 6,
      title: 'Введение в Node.js',
      description:
        'Узнайте, как создавать серверные приложения с использованием Node.js.',
      videoUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
      thumbnailUrl: 'https://img.youtube.com/vi/TlB_eWDSMt4/0.jpg',
      publishedDate: '2023-04-25',
      duration: '00:45:00'
    },
    {
      id: 7,
      title: 'Использование Express.js для создания API',
      description:
        'Создавайте RESTful API с использованием Express.js, популярного фреймворка для Node.js.',
      videoUrl: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
      thumbnailUrl: 'https://img.youtube.com/vi/L72fhGm1tfE/0.jpg',
      publishedDate: '2023-05-01',
      duration: '00:50:00'
    },
    {
      id: 8,
      title: 'Введение в GraphQL',
      description:
        'Изучите GraphQL, мощный язык запросов для API, который позволяет клиентам определять структуру данных, которую они хотят получить.',
      videoUrl: 'https://www.youtube.com/watch?v=7giZGFDGnkc',
      thumbnailUrl: 'https://img.youtube.com/vi/7giZGFDGnkc/0.jpg',
      publishedDate: '2023-05-05',
      duration: '00:35:00'
    },
    {
      id: 9,
      title: 'Создание веб-приложения с использованием React и GraphQL',
      description:
        'Узнайте, как создать веб-приложение с использованием React на фронтенде и GraphQL на бэкенде.',
      videoUrl: 'https://www.youtube.com/watch?v=4_ZiJGY5F38',
      thumbnailUrl: 'https://img.youtube.com/vi/7giZGFDGnkc/0.jpg',
      publishedDate: '2023-05-10',
      duration: '00:40:00'
    },
    {
      id: 10,
      title: 'Введение в React',
      description:
        'Уроки по React для начинающих. Познакомьтесь с основами React и создайте свой первый проект.',
      videoUrl: 'https://www.youtube.com/watch?v=sBws8MSXN7A',
      thumbnailUrl: 'https://img.youtube.com/vi/sBws8MSXN7A/0.jpg',
      publishedDate: '2023-04-01',
      duration: '00:30:00'
    },
    {
      id: 11,
      title: 'JavaScript для начинающих',
      description:
        'Изучите основы JavaScript, который является основой для разработки веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      thumbnailUrl: 'https://img.youtube.com/vi/W6NZfCO5SIk/0.jpg',
      publishedDate: '2023-04-05',
      duration: '00:45:00'
    },
    {
      id: 12,
      title: 'Создание веб-сайта с Next.js',
      description:
        'Узнайте, как быстро создать современный веб-сайт с использованием Next.js, популярного фреймворка для React.',
      videoUrl: 'https://www.youtube.com/watch?v=IkOVe40Sy0U',
      thumbnailUrl: 'https://img.youtube.com/vi/IkOVe40Sy0U/0.jpg',
      publishedDate: '2023-04-10',
      duration: '00:50:00'
    },
    {
      id: 13,
      title: 'Введение в Vue.js',
      description:
        'Основы Vue.js для быстрого старта в разработке веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=4deVCNJq3qc',
      thumbnailUrl: 'https://img.youtube.com/vi/4deVCNJq3qc/0.jpg',
      publishedDate: '2023-04-15',
      duration: '00:35:00'
    },
    {
      id: 14,
      title: 'Погружение в TypeScript',
      description:
        'Изучите TypeScript, статически типизированный язык программирования, который расширяет JavaScript.',
      videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
      thumbnailUrl: 'https://img.youtube.com/vi/BwuLxPH8IDs/0.jpg',
      publishedDate: '2023-04-20',
      duration: '00:40:00'
    },
    {
      id: 15,
      title: 'Введение в Node.js',
      description:
        'Узнайте, как создавать серверные приложения с использованием Node.js.',
      videoUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
      thumbnailUrl: 'https://img.youtube.com/vi/TlB_eWDSMt4/0.jpg',
      publishedDate: '2023-04-25',
      duration: '00:45:00'
    },
    {
      id: 16,
      title: 'Использование Express.js для создания API',
      description:
        'Создавайте RESTful API с использованием Express.js, популярного фреймворка для Node.js.',
      videoUrl: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
      thumbnailUrl: 'https://img.youtube.com/vi/L72fhGm1tfE/0.jpg',
      publishedDate: '2023-05-01',
      duration: '00:50:00'
    },
    {
      id: 17,
      title: 'Введение в GraphQL',
      description:
        'Изучите GraphQL, мощный язык запросов для API, который позволяет клиентам определять структуру данных, которую они хотят получить.',
      videoUrl: 'https://www.youtube.com/watch?v=7giZGFDGnkc',
      thumbnailUrl: 'https://img.youtube.com/vi/7giZGFDGnkc/0.jpg',
      publishedDate: '2023-05-05',
      duration: '00:35:00'
    },
    {
      id: 18,
      title: 'Создание веб-приложения с использованием React и GraphQL',
      description:
        'Узнайте, как создать веб-приложение с использованием React на фронтенде и GraphQL на бэкенде.',
      videoUrl: 'https://www.youtube.com/watch?v=4_ZiJGY5F38',
      thumbnailUrl: 'https://img.youtube.com/vi/7giZGFDGnkc/0.jpg',
      publishedDate: '2023-05-10',
      duration: '00:40:00'
    },
    {
      id: 19,
      title: 'Введение в React',
      description:
        'Уроки по React для начинающих. Познакомьтесь с основами React и создайте свой первый проект.',
      videoUrl: 'https://www.youtube.com/watch?v=sBws8MSXN7A',
      thumbnailUrl: 'https://img.youtube.com/vi/sBws8MSXN7A/0.jpg',
      publishedDate: '2023-04-01',
      duration: '00:30:00'
    },
    {
      id: 20,
      title: 'JavaScript для начинающих',
      description:
        'Изучите основы JavaScript, который является основой для разработки веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      thumbnailUrl: 'https://img.youtube.com/vi/W6NZfCO5SIk/0.jpg',
      publishedDate: '2023-04-05',
      duration: '00:45:00'
    },
    {
      id: 21,
      title: 'Создание веб-сайта с Next.js',
      description:
        'Узнайте, как быстро создать современный веб-сайт с использованием Next.js, популярного фреймворка для React.',
      videoUrl: 'https://www.youtube.com/watch?v=IkOVe40Sy0U',
      thumbnailUrl: 'https://img.youtube.com/vi/IkOVe40Sy0U/0.jpg',
      publishedDate: '2023-04-10',
      duration: '00:50:00'
    },
    {
      id: 22,
      title: 'Введение в Vue.js',
      description:
        'Основы Vue.js для быстрого старта в разработке веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=4deVCNJq3qc',
      thumbnailUrl: 'https://img.youtube.com/vi/4deVCNJq3qc/0.jpg',
      publishedDate: '2023-04-15',
      duration: '00:35:00'
    },
    {
      id: 23,
      title: 'Погружение в TypeScript',
      description:
        'Изучите TypeScript, статически типизированный язык программирования, который расширяет JavaScript.',
      videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
      thumbnailUrl: 'https://img.youtube.com/vi/BwuLxPH8IDs/0.jpg',
      publishedDate: '2023-04-20',
      duration: '00:40:00'
    },
    {
      id: 24,
      title: 'Введение в Node.js',
      description:
        'Узнайте, как создавать серверные приложения с использованием Node.js.',
      videoUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
      thumbnailUrl: 'https://img.youtube.com/vi/TlB_eWDSMt4/0.jpg',
      publishedDate: '2023-04-25',
      duration: '00:45:00'
    },
    {
      id: 25,
      title: 'Использование Express.js для создания API',
      description:
        'Создавайте RESTful API с использованием Express.js, популярного фреймворка для Node.js.',
      videoUrl: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
      thumbnailUrl: 'https://img.youtube.com/vi/L72fhGm1tfE/0.jpg',
      publishedDate: '2023-05-01',
      duration: '00:50:00'
    },
    {
      id: 26,
      title: 'Введение в GraphQL',
      description:
        'Изучите GraphQL, мощный язык запросов для API, который позволяет клиентам определять структуру данных, которую они хотят получить.',
      videoUrl: 'https://www.youtube.com/watch?v=7giZGFDGnkc',
      thumbnailUrl: 'https://img.youtube.com/vi/7giZGFDGnkc/0.jpg',
      publishedDate: '2023-05-05',
      duration: '00:35:00'
    },
    {
      id: 27,
      title: 'Создание веб-приложения с использованием React и GraphQL',
      description:
        'Узнайте, как создать веб-приложение с использованием React на фронтенде и GraphQL на бэкенде.',
      videoUrl: 'https://www.youtube.com/watch?v=4_ZiJGY5F38',
      thumbnailUrl: 'https://img.youtube.com/vi/7giZGFDGnkc/0.jpg',
      publishedDate: '2023-05-10',
      duration: '00:40:00'
    },
    {
      id: 28,
      title: 'Введение в React',
      description:
        'Уроки по React для начинающих. Познакомьтесь с основами React и создайте свой первый проект.',
      videoUrl: 'https://www.youtube.com/watch?v=sBws8MSXN7A',
      thumbnailUrl: 'https://img.youtube.com/vi/sBws8MSXN7A/0.jpg',
      publishedDate: '2023-04-01',
      duration: '00:30:00'
    },
    {
      id: 29,
      title: 'JavaScript для начинающих',
      description:
        'Изучите основы JavaScript, который является основой для разработки веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      thumbnailUrl: 'https://img.youtube.com/vi/W6NZfCO5SIk/0.jpg',
      publishedDate: '2023-04-05',
      duration: '00:45:00'
    },
    {
      id: 30,
      title: 'Создание веб-сайта с Next.js',
      description:
        'Узнайте, как быстро создать современный веб-сайт с использованием Next.js, популярного фреймворка для React.',
      videoUrl: 'https://www.youtube.com/watch?v=IkOVe40Sy0U',
      thumbnailUrl: 'https://img.youtube.com/vi/IkOVe40Sy0U/0.jpg',
      publishedDate: '2023-04-10',
      duration: '00:50:00'
    },
    {
      id: 31,
      title: 'Введение в Vue.js',
      description:
        'Основы Vue.js для быстрого старта в разработке веб-приложений.',
      videoUrl: 'https://www.youtube.com/watch?v=4deVCNJq3qc',
      thumbnailUrl: 'https://img.youtube.com/vi/4deVCNJq3qc/0.jpg',
      publishedDate: '2023-04-15',
      duration: '00:35:00'
    },
    {
      id: 32,
      title: 'Погружение в TypeScript',
      description:
        'Изучите TypeScript, статически типизированный язык программирования, который расширяет JavaScript.',
      videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
      thumbnailUrl: 'https://img.youtube.com/vi/BwuLxPH8IDs/0.jpg',
      publishedDate: '2023-04-20',
      duration: '00:40:00'
    },
    {
      id: 33,
      title: 'Введение в Node.js',
      description:
        'Узнайте, как создавать серверные приложения с использованием Node.js.',
      videoUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
      thumbnailUrl: 'https://img.youtube.com/vi/TlB_eWDSMt4/0.jpg',
      publishedDate: '2023-04-25',
      duration: '00:45:00'
    },
    {
      id: 34,
      title: 'Использование Express.js для создания API',
      description:
        'Создавайте RESTful API с использованием Express.js, популярного фреймворка для Node.js.',
      videoUrl: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
      thumbnailUrl: 'https://img.youtube.com/vi/L72fhGm1tfE/0.jpg',
      publishedDate: '2023-05-01',
      duration: '00:50:00'
    },
    {
      id: 35,
      title: 'Создание веб-приложения с использованием React и GraphQL',
      description:
        'Узнайте, как создать веб-приложение с использованием React на фронтенде и GraphQL на бэкенде.',
      videoUrl: 'https://www.youtube.com/watch?v=4_ZiJGY5F38',
      thumbnailUrl: 'https://img.youtube.com/vi/L72fhGm1tfE/0.jpg',
      publishedDate: '2023-05-10',
      duration: '00:40:00'
    },
    {
      id: 36,
      title: 'Введение в GraphQL',
      description:
        'Изучите GraphQL, мощный язык запросов для API, который позволяет клиентам определять структуру данных, которую они хотят получить.',
      videoUrl: 'https://www.youtube.com/watch?v=7giZGFDGnkc',
      thumbnailUrl: 'https://img.youtube.com/vi/7giZGFDGnkc/0.jpg',
      publishedDate: '2023-05-05',
      duration: '00:35:00'
    }
  ]);

  return (
    <div className={styles.mediateka}>
      <h2>Медиатека</h2>
      <div className={styles.mediateka__block}>
        <h3 className={styles.mediateka__blockTitle}>Прямые трансляции</h3>
        <div className={styles.mediateka__videosContainer}>
          {lives.slice(0, visibleLivesCount).map(live => (
            <a
              key={live.id} // Добавьте уникальный ключ для каждого элемента
              className={styles.mediateka__item}
              href={live.videoUrl}
              target="_blank"
            >
              <img
                className={styles.mediateka__itemImage}
                src={live.thumbnailUrl}
                alt={live.title}
              />
            </a>
          ))}
        </div>
        <Button
          className={cn(
            styles.mediateka__showHideListBtn,
            isLivesShown && styles.mediateka__showHideListBtn_hide
          )}
          onClick={toggleLivesDisplay}
          variant="violet"
        >
          {visibleLivesCount === 3 ? 'Раскрыть весь список' : 'Скрыть'}
        </Button>
      </div>
      <div className={styles.mediateka__block}>
        <h3 className={styles.mediateka__blockTitle}>Журнал</h3>
        <div className={styles.mediateka__videosContainer}>
          {movieList
            .slice(
              (activePage - 1) * visibleMoviesCount,
              activePage * visibleMoviesCount
            )
            .map(movie => (
              <a
                key={movie.id}
                className={styles.mediateka__item}
                href={movie.videoUrl}
                target="_blank"
              >
                <img
                  className={styles.mediateka__itemImage}
                  src={movie.thumbnailUrl}
                  alt={movie.title}
                />
              </a>
            ))}
        </div>
      </div>
      <Pagination
        activePage={activePage}
        itemsPerPage={visibleMoviesCount}
        setActivePage={setActivePage}
        setItemsPerPage={setVisibleMoviesCount}
        totalPages={Math.ceil(movieList.length / visibleMoviesCount)}
      />
    </div>
  );
};
