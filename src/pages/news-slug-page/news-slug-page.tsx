'use client';

import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Button } from '@/shared/ui/button';
import cn from 'classnames';
import { NewsSlugPageProps } from './types';
import { Breadcrumb } from '@/shared/ui/breadcrumb';
import img1 from '../../shared/images/for-news-slug-page/41cd11b48cc31cb2d11e3ad729484387.png';
import img2 from '../../shared/images/for-news-slug-page/686fdb64ba3abacf73d1fb92e370e7e5.png';
import img3 from '../../shared/images/for-news-slug-page/9a9fd3b86436161849167e4928b10520.png';
import { NewsHeader } from '@/shared/ui/news-header';
import { NewsGallery } from '@/shared/ui/news-gallery';

export const NewsSlugPage: React.FC<NewsSlugPageProps> = ({ newsItem }) => {
  const [breadcrumbLinks, setBreadcrumbLinks] = useState<any>([]);
  const [images, setImages] = useState<any>([
    img1,
    img2,
    img3,
    img1,
    img2,
    img3,
    img1,
    img2,
    img3
  ]);

  useEffect(() => {
    const links = [
      { title: 'Главная', link: '/' },
      { title: 'Новости', link: '/news' },
      {
        title: newsItem.title,
        link: ''
      }
    ];
    setBreadcrumbLinks(links);
  }, []);

  return (
    <div className={styles.newsId}>
      <Breadcrumb links={breadcrumbLinks} />
      <NewsHeader heading={newsItem.title} />
      <div className={styles.newsId__content}>{newsItem.content}</div>
      <div className={styles.newsId__data}>
        <span
          className={cn(
            styles.newsId__dataItem,
            styles.newsId__dataItem_platform
          )}
        >
          {newsItem.platform}
        </span>
        <span
          className={cn(
            styles.newsId__dataItem,
            styles.newsId__dataItem_moderators
          )}
        >
          {newsItem.moderators}
        </span>
      </div>
      <div className={styles.newsId__buttons}>
        <Button variant="blue">Зарегистрироваться</Button>
        <Button variant="violet">Добавить в Google Календарь</Button>
      </div>
      <NewsGallery images={images} />
      <div className={styles.newsId__prevNextNews}>
        <button
          className={cn(
            styles.newsId__prevNextNewsBtn,
            styles.newsId__prevNextNewsBtn_prev
          )}
        >
          Предыдущая новость
        </button>
        <button
          className={cn(
            styles.newsId__prevNextNewsBtn,
            styles.newsId__prevNextNewsBtn_next
          )}
        >
          Следующая новость
        </button>
      </div>
    </div>
  );
};
