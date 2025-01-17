'use client';

import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { SelectBox } from '@/shared/ui/selectbox';
import { InputSearch } from '@/shared/ui/inputSearch';
import { Pagination } from '@/shared/ui/pagination';
import LaureateList from './LaureateList';
import laureateImg from '@/shared/images/for-laureates-page/laureate1.jpg';
import laureateImg2 from '@/shared/images/for-laureates-page/laureate2.png';
import laureateImg3 from '@/shared/images/for-laureates-page/laureate3.png';
import { ILaureate } from './types';

export const LaureatesPage: React.FC = () => {
  const [laureates, setLaureates] = useState<ILaureate[]>([
    {
      id: 1,
      fullName: 'Алтухов Виталий Геннадьевич',
      position: 'Сооснователь, директор по разработке и исследованиям',
      description:
        'Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли. Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли.',
      imageUrl: laureateImg,
      nomination: 'За популяризацию атомной отрасли',
      year: '2013'
    },
    {
      id: 2,
      fullName: 'Шрайбер Ирина',
      position:
        'Кандидат физико-математических науки, учёный, исследователь, ментор, лектор​',
      description:
        'Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли. Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли.',
      imageUrl: laureateImg2,
      nomination: 'За научные исследования',
      year: '2013'
    },
    {
      id: 3,
      fullName: 'Алтухов Виталий Геннадьевич',
      position: 'Сооснователь, директор по разработке и исследованиям',
      description:
        'Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли. Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли.',
      imageUrl: laureateImg,
      nomination: 'За научные исследования',
      year: '2013'
    },
    {
      id: 4,
      fullName: 'Алтухов Виталий Геннадьевич',
      position: 'Сооснователь, директор по разработке и исследованиям',
      description:
        'Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли. Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли.',
      imageUrl: laureateImg,
      nomination: 'За научные исследования',
      year: '2013'
    },
    {
      id: 5,
      fullName: 'Алтухов Виталий Геннадьевич',
      position: 'Сооснователь, директор по разработке и исследованиям',
      description:
        'Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли. Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли.',
      imageUrl: laureateImg,
      nomination: 'За научные исследования',
      year: '2013'
    },
    {
      id: 6,
      fullName: 'Алтухов Виталий Геннадьевич',
      position: 'Сооснователь, директор по разработке и исследованиям',
      description:
        'Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли. Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли.',
      imageUrl: laureateImg,
      nomination: 'За безопасность и экологию',
      year: '2013'
    },
    {
      id: 7,
      fullName: 'Алтухов Виталий Геннадьевич',
      position: 'Сооснователь, директор по разработке и исследованиям',
      description:
        'Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли. Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли.',
      imageUrl: laureateImg,
      nomination: 'За образование и обучение',
      year: '2013'
    },
    {
      id: 8,
      fullName: 'Алтухов Виталий Геннадьевич',
      position: 'Сооснователь, директор по разработке и исследованиям',
      description:
        'Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли. Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли.',
      imageUrl: laureateImg,
      nomination: 'За образование и обучение',
      year: '2013'
    },
    {
      id: 9,
      fullName: 'Иваниловская Екатерина',
      position:
        'Начальник отдела стратегических коммуникаций РЭУ им. Г.В. Плеханова',
      description:
        'Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли. Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли.',
      imageUrl: laureateImg3,
      nomination: 'За образование и обучение',
      year: '2013'
    }
  ]);

  const nominations = [
    {
      value: 'Выберите номинацию',
      label: 'Выберите номинацию'
    },
    {
      value: 'За популяризацию атомной отрасли',
      label: 'За популяризацию атомной отрасли'
    },
    {
      value: 'За образование и обучение',
      label: 'За образование и обучение'
    }
  ];

  const years = [
    { value: '2013', label: '2013' },
    { value: '2014', label: '2014' },
    { value: '2019', label: '2019' }
  ];

  const [nomination, setNomination] = useState('Выберите номинацию');
  const [year, setYear] = useState('2013');

  const [searchQuery, setSearchQuery] = useState('');

  // for Pagination
  const [activePage, setActivePage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<8 | 18 | 30>(8);
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [pageData, setPageData] = useState<ILaureate[]>([]);

  const searchLaureates = () => {
    const result = laureates.filter(
      laureate =>
        laureate.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laureate.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laureate.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setLaureates(result);
  };

  useEffect(() => {
    const start = (activePage - 1) * itemsPerPage;
    const end = (activePage - 1) * itemsPerPage + itemsPerPage;
    console.log(start);
    console.log(itemsPerPage);
    const currentPageData = laureates.slice(start, end);
    setPageData(currentPageData);
  }, [activePage, itemsPerPage, laureates]);

  return (
    <>
      <h2 className={cn(classes.title)}>Труды лауреатов премии Колба</h2>
      <div className={cn(classes.laureatesfilter)}>
        <SelectBox
          className={cn(classes.laureatesfilter__selectNomination)}
          dataList={nominations}
          value={nomination}
          setValue={setNomination}
          defaultValue={'Выберите номинацию'}
        />
        <SelectBox
          className={cn(classes.laureatesfilter__selectYear)}
          dataList={years}
          value={year}
          setValue={setYear}
        />
        <InputSearch
          className={cn(classes.laureatesfilter__inputSearch)}
          value={searchQuery}
          handleInputChange={setSearchQuery}
          handleForm={() => {}}
        />
      </div>
      <LaureateList laureates={pageData} />
      <Pagination
        activePage={activePage}
        itemsPerPage={
          itemsPerPage === 8 || itemsPerPage === 18 || itemsPerPage === 30
            ? itemsPerPage
            : 8
        }
        setActivePage={setActivePage}
        setItemsPerPage={setItemsPerPage}
        totalPages={Math.ceil(laureates.length / itemsPerPage)}
      />
    </>
  );
};
