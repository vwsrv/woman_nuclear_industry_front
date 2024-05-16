'use client';

import React, { useState } from 'react';
import { newsPageProps, itemType } from './types';
import { Breadcrumb } from '@/shared/ui/breadcrumb';
import { News } from '@/shared/ui/news';
import { SelectBox } from '@/shared/ui/selectbox';
import { InputSearch } from '@/shared/ui/inputSearch';
import { Pagination } from '@/shared/ui/pagination';
import img1 from '@/shared/images/for-news/new1.png';
import img2 from '@/shared/images/for-news/new2.png';
import img3 from '@/shared/images/for-news/new3.png';
import img4 from '@/shared/images/for-news/new4.png';
import img5 from '@/shared/images/for-news/new5.png';
import img6 from '@/shared/images/for-news/new6.png';
import img7 from '@/shared/images/for-news/new7.png';
import styles from './index.module.scss';

//export const NewsPage: React.FC<newsPageProps> = ({ pageData }) => {
export const NewsPage: React.FC = () => {

  // for SelectBox

  // TODO: в открывающемся списке нет данных 
  // + добавить setValue: (selectedValue: string) => void;
  // + dataList
  const [options, setOptions] = useState([]);
  const [valueFirst, setValueFirst] = useState('2024');
  const [valueSecond, setValueSecond] = useState('Сентябрь');
  const [year, setYear] = useState('2023');
  const [month, setMonth] = useState('Сентябрь');
  const [searchQuery, setSearchQuery] = useState('');

  const dataListYears = [
    { value: '2013', label: '2013' },
    { value: '2014', label: '2014' },
    { value: '2019', label: '2019' }
  ];

  const dataListMonths = [
    { value: 'Январь', label: 'Январь' },
    { value: 'Февраль', label: 'Февраль' },
    { value: 'Март', label: 'Март' },
    { value: 'Апрель', label: 'Апрель' },
    { value: 'Май', label: 'Май' },
    { value: 'Июнь', label: 'Июнь' },
    { value: 'Июль', label: 'Июль' },
    { value: 'Август', label: 'Август' },
    { value: 'Сентябрь', label: 'Сентябрь' },
    { value: 'Октябрь', label: 'Октябрь' },
    { value: 'Ноябрь', label: 'Ноябрь' },
    { value: 'Декабрь', label: 'Декабрь' },
  ]

  // for News
  const [visibleNewsCount, setVisibleNewsCount] = useState(7);

  const [newsList, setNewsList] = useState([
    {
      id: 1,
      imageUrl: img1,
      date: '2024-09-15 19:00',
      title: '30 экспертов из 20 стран мира обсудили проблемы, тенденции, вызовы и новые возможности в сфере образования на ближайшие годы на III Международной конференции Global Impact Conference 2022 (GIC 2022)',
      link: 'http://winrussia.com/',
    },
    {
      id: 2,
      imageUrl: img2,
      date: '2024-09-15 19:00',
      title: 'Объединение женщин атомной отрасли присоединилось сразу к нескольким акциям, приуроченным к Дню знаний!',
      link: 'http://winrussia.com/',
    },
    {
      id: 3,
      imageUrl: img3,
      date: '2024-09-15 19:00',
      title: 'Молодежный день НМЭК-2023: Открытый диалог женщин-лидеров экологических инициатив',
      link: 'http://winrussia.com/',
    },
    {
      id: 4,
      imageUrl: img4,
      date: '2024-09-15 19:00',
      title: 'Женщины-технологические лидеры разных стран обсудили новые возможности для глобального сотрудничества',
      link: 'http://winrussia.com/',
    },
    {
      id: 5,
      imageUrl: img5,
      date: '2024-09-15 19:00',
      title: 'Объединение женщин атомной отрасли на полях АТОМЭКСПО 2022 объединило экспертов из 16 стран',
      link: 'http://winrussia.com/',
    },
    {
      id: 6,
      imageUrl: img6,
      date: '2024-09-15 19:00',
      title: 'Стань частью команды №1! Выбирай и поддержи Росатом в рейтинге лучших работодателей страны!',
      link: 'http://winrussia.com/',
    },
    {
      id: 7,
      imageUrl: img7,
      date: '2024-09-15 19:00',
      title: 'Деловая программа Объединения женщин атомной отрасли на Восточном экономическом форуме началась с диалога по вопросам международного сотрудничества в новых условиях',
      link: 'http://winrussia.com/',
    },
    {
      id: 8,
      imageUrl: img1,
      date: '2024-09-15 19:00',
      title: '30 экспертов из 20 стран мира обсудили проблемы, тенденции, вызовы и новые возможности в сфере образования на ближайшие годы на III Международной конференции Global Impact Conference 2022 (GIC 2022)',
      link: 'http://winrussia.com/',
    },
    {
      id: 9,
      imageUrl: img2,
      date: '2024-09-15 19:00',
      title: 'Объединение женщин атомной отрасли присоединилось сразу к нескольким акциям, приуроченным к Дню знаний!',
      link: 'http://winrussia.com/',
    },
    {
      id: 10,
      imageUrl: img3,
      date: '2024-09-15 19:00',
      title: 'Молодежный день НМЭК-2023: Открытый диалог женщин-лидеров экологических инициатив',
      link: 'http://winrussia.com/',
    },
    {
      id: 11,
      imageUrl: img4,
      date: '2024-09-15 19:00',
      title: 'Женщины-технологические лидеры разных стран обсудили новые возможности для глобального сотрудничества',
      link: 'http://winrussia.com/',
    },
    {
      id: 12,
      imageUrl: img5,
      date: '2024-09-15 19:00',
      title: 'Объединение женщин атомной отрасли на полях АТОМЭКСПО 2022 объединило экспертов из 16 стран',
      link: 'http://winrussia.com/',
    },
    {
      id: 13,
      imageUrl: img6,
      date: '2024-09-15 19:00',
      title: 'Стань частью команды №1! Выбирай и поддержи Росатом в рейтинге лучших работодателей страны!',
      link: 'http://winrussia.com/',
    },
    {
      id: 14,
      imageUrl: img7,
      date: '2024-09-15 19:00',
      title: 'Деловая программа Объединения женщин атомной отрасли на Восточном экономическом форуме началась с диалога по вопросам международного сотрудничества в новых условиях',
      link: 'http://winrussia.com/',
    }
  ]);

  // for Pagination
  const [activePage, setActivePage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<9 | 18 | 30>(9);
  const [currentCategory, setCurrentCategory] = useState<number>(0);

  return (
    <div className={styles.news}>
      <Breadcrumb
        className="breadcrumb"
        links={[
          { title: 'Главная', link: '/' },
          { title: 'Новости', link: '/news' }
        ]}
      />
      <h1 className={styles.newsTitle}>Новости</h1>
      <div className={styles.searchForm}>
        <div className={styles.selectBoxForm}>
          <SelectBox
            className={styles.selectBoxFirstNews}
            variant='violet'
            dataList={dataListYears}
            value={valueFirst}
            setValue={setYear}
          />
          <SelectBox
            className={styles.selectBoxSecondNews}
            variant='violet'
            dataList={dataListMonths}
            value={valueSecond}
            setValue={setMonth}
          />
        </div>
        <div className={styles.inputNews}>
          <InputSearch
            value={searchQuery}
            handleInputChange={setSearchQuery}
            handleForm={() => { }}
          />
        </div>
      </div>
      <div className={styles.newsList}>
        {newsList.slice(0, visibleNewsCount).map(news => (
          < News
            key={news.id}
            imageUrl={news.imageUrl}
            date={new Date(news.date)}
            title={news.title}
            link={news.link}
          />
        ))}
      </div>
      <Pagination
        activePage={activePage}
        itemsPerPage={
          itemsPerPage === 9 || itemsPerPage === 18 || itemsPerPage === 30
            ? itemsPerPage
            : 9
        }
        setActivePage={setActivePage}
        setItemsPerPage={setItemsPerPage}
        totalPages={Math.ceil(
          newsList.length / itemsPerPage
        )}
      />
    </div>
  );
};