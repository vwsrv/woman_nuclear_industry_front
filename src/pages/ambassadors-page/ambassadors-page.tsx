'use client';

import cn from 'classnames';
import classes from './styles.module.scss';
import { Breadcrumb } from '@/shared/ui/breadcrumb';
import { ambassadorsPageProps, itemType } from './types';
import { useState } from 'react';
import Link from 'next/link';
import { Pagination } from '@/shared/ui/pagination';
import { SelectBox } from '@/shared/ui/selectbox';
import { PersonCard } from '@/shared/ui/person-card';
import { Popup } from '@/shared/ui/popup';
import { ProfileDetails } from '@/shared/ui/profile-details/profile-details';
import { Accordion } from '@/shared/ui/accordion';

export const AmbassadorsPage: React.FC<ambassadorsPageProps> = ({
  pageData
}) => {
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<8 | 18 | 30>(8);
  const [region, setRegion] = useState<string>('Выберите регион');
  const [isOpenDetails, setOpenDetails] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<itemType | null>(null);
  const uniqueRegions: { value: string; label: string }[] = pageData[
    currentCategory
  ].items.reduce((regions: { value: string; label: string }[], item) => {
    if (!regions.some(region => region.value === item.region)) {
      regions.push({ value: item.region, label: item.region });
    }
    return regions;
  }, []);

  const selectCategory = (id: number): void => {
    setCurrentCategory(id);
  };

  const handleCardClick = (id: number) => {
    const itemById = pageData[currentCategory].items.find(
      item => item.id === id
    );
    if (itemById) {
      setCurrentItem(itemById);
      setOpenDetails(true);
    } else {
      throw new Error('Произошла ошибка');
    }
  };

  const handleСlosePopup = () => {
    setOpenDetails(false);
    setCurrentItem(null);
  };

  const handleRegionChange = (region: string) => {
    setRegion(region);
  };

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
              dataList={uniqueRegions}
              value={region}
              setValue={handleRegionChange}
            />
            <div className={cn(classes.ambassadorsCardsGrid)}>
              {pageData[currentCategory].items
                .filter(
                  item =>
                    !region ||
                    item.region === region ||
                    region === 'Выберите регион'
                )
                .slice(
                  (activePage - 1) * itemsPerPage,
                  activePage * itemsPerPage
                )
                .map(item => (
                  <PersonCard
                    key={item.id}
                    id={item.id}
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
      {isOpenDetails && currentItem && (
        <Popup
          isOpen={isOpenDetails}
          onClose={handleСlosePopup}
          isCloseByOverlay={true}
          title="Профиль"
        >
          <ProfileDetails
            imageUrl={currentItem.img}
            name={currentItem.name}
            description={currentItem.description.split(', ')}
            profileAbout={<Accordion contentList={currentItem.itemAbout} />}
          />
        </Popup>
      )}
    </div>
  );
};
