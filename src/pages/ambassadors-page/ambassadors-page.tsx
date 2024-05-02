'use client';

import cn from 'classnames';
import classes from './styles.module.scss';
import { Breadcrumb } from '@/shared/ui/breadcrumb';
import { ambassadorsPageProps } from './types';
import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import { Pagination } from '@/shared/ui/pagination';
import { SelectBox } from '@/shared/ui/selectbox';
import { PersonCard } from '@/shared/ui/person-card';

export const AmbassadorsPage: React.FC<ambassadorsPageProps> = ({
  pageData
}) => {
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<8 | 18 | 30>(8);
  const [region, setRegion] = useState('Выберите регион');
  const options = [
    { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
    { value: 'Москва', label: 'Москва' },
    { value: 'Краснодар', label: 'Краснодар' }
  ];

  const selectCategory = (id: number): void => {
    setCurrentCategory(id);
  };

  const handleCardClick = () => {};

  return (
    <div className={cn(classes.ambassadorsPage)}>
      <Breadcrumb
        className="breadcrumb"
        links={[
          { title: 'Главная', link: '/' },
          { title: 'Амбассадоры', link: '/ambassadors' }
        ]}
      />
      <div className={cn(classes.ambassadorsCategories)}>
        {pageData &&
          pageData.map((category, index) => (
            <button
              key={index}
              className={cn(classes.ambassadorsCategory, {
                [classes.selected]: currentCategory === index
              })}
              onClick={() => selectCategory(index)}
            >
              {category.title}
            </button>
          ))}
      </div>
      <div className={cn(classes.ambassadorsCategoryContent)}>
        {pageData[currentCategory] && (
          <>
            <p className={cn(classes.ambassadorsDescription)}>
              {pageData[currentCategory].description}
            </p>
            {pageData[currentCategory].title === 'Колумнисты' && (
              <div className={cn(classes.ambassadorsLinks)}>
                <Link className={cn(classes.ambassadorsLink)} href={''}>
                  Подписка на материалы колумнистов
                </Link>
                <Link className={cn(classes.ambassadorsLink)} href={''}>
                  Стать колумнистом
                </Link>
              </div>
            )}
            <SelectBox
              variant="violet"
              dataList={options}
              value={region}
              setValue={setRegion}
            />
            <div className={cn(classes.ambassadorsCardsGrid)}>
              {pageData[currentCategory].items
                .slice(
                  (activePage - 1) * itemsPerPage,
                  activePage * itemsPerPage
                )
                .map(item => (
                  <PersonCard
                    key={item.id}
                    name={item.name}
                    imageUrl={item.img}
                    description={item.description}
                    handler={handleCardClick}
                  />
                ))}
            </div>
            <Pagination
              activePage={activePage}
              itemsPerPage={
                itemsPerPage === 8 || itemsPerPage === 18 || itemsPerPage === 30
                  ? itemsPerPage
                  : 8
              }
              setActivePage={setActivePage}
              setItemsPerPage={setItemsPerPage}
              totalPages={Math.ceil(
                pageData[currentCategory].items.length / itemsPerPage
              )}
            />
          </>
        )}
      </div>
    </div>
  );
};
