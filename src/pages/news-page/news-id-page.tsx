'use client';

import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Button } from '@/shared/ui/button';
import cn from 'classnames';
import { NewsIdPageProps } from './types';
import { Breadcrumb } from '@/shared/ui/breadcrumb';
import Image from 'next/image';
import img1 from '../../shared/images/for-news-id-page/Rectangle 579.png';
import img2 from '../../shared/images/for-news-id-page/Rectangle 580.png';
import img3 from '../../shared/images/for-news-id-page/Rectangle 661.png';
import { NewsHeader } from '@/shared/ui/news-header';
import { Popup } from '@/shared/ui/popup';

export const NewsIdPage: React.FC<NewsIdPageProps> = ({ newsItem }) => {
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

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCloseByOverlay, setIsCloseByOverlay] = useState(true);
  const [selectedImg, setSelectedImg] = useState(img1);

  const handleImgOpen = (img: any) => {
    setSelectedImg(img);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

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

    if (galleryRef.current) {
      const galleryElement = galleryRef.current as HTMLElement;
      const isAtEnd =
        galleryElement.scrollLeft + galleryElement.clientWidth >=
        galleryElement.scrollWidth - 100;
      setIsAtEnd(isAtEnd);
    }
  }, []);

  const galleryRef = React.useRef(null);

  const scrollGallery = (element: any, isLeft: boolean) => {
    const scrollAmount = element.scrollWidth / 5;
    element.scrollBy({
      top: 0,
      left: isLeft ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
    const isAtStart = element.scrollLeft === 0;
    const isAtEnd =
      element.scrollLeft + element.clientWidth >= element.scrollWidth - 100;
    setIsAtStart(isAtStart);
    setIsAtEnd(isAtEnd);
  };

  const scroll = (isLeft: boolean) => {
    if (galleryRef.current) {
      scrollGallery(galleryRef.current, isLeft);
    }
  };

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
          онлайн-платформа Объединения женщин атомной отрасли
        </span>
        <span
          className={cn(
            styles.newsId__dataItem,
            styles.newsId__dataItem_moderators
          )}
        >
          модераторы: Светлана Кожевникова, Анна Тоболенко
        </span>
      </div>
      <div className={styles.newsId__buttons}>
        <Button variant="blue">Зарегистрироваться</Button>
        <Button variant="violet">Добавить в Google Календарь</Button>
      </div>
      <div
        className={styles.newsId__gallery}
        ref={galleryRef}
        onScroll={() => {
          if (galleryRef.current) {
            const galleryElement = galleryRef.current as HTMLElement;
            const isAtStart = galleryElement.scrollLeft === 0;
            const isAtEnd =
              galleryElement.scrollLeft + galleryElement.clientWidth >=
              galleryElement.scrollWidth - 100;
            setIsAtStart(isAtStart);
            setIsAtEnd(isAtEnd);
          }
        }}
      >
        {images.map((img: any, index: number) => {
          const n = index + 1;
          const isDoubleRow = (n - 2) % 3 === 0;

          return (
            <div
              key={index}
              className={`${styles.newsId__galleryImgContainer} ${isDoubleRow ? `${styles.newsId__galleryImgContainer_doubleRow}` : ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={styles.newsId__galleryImg}
                onClick={() => handleImgOpen(img)}
              />
            </div>
          );
        })}
        <div
          className={cn(
            styles.newsId__galleryBtnScrollBg,
            styles.newsId__galleryBtnScrollBg_left,
            isAtStart && styles.newsId__galleryBtnScrollBg_hidden
          )}
        ></div>
        <div
          className={cn(
            styles.newsId__galleryBtnScrollBg,
            styles.newsId__galleryBtnScrollBg_right,
            isAtEnd && styles.newsId__galleryBtnScrollBg_hidden
          )}
        ></div>
        <button
          className={cn(
            styles.newsId__galleryBtnScroll,
            styles.newsId__galleryBtnScroll_right,
            isAtEnd && styles.newsId__galleryBtnScroll_hidden
          )}
          onClick={() => scroll(false)}
        ></button>
        <button
          className={cn(
            styles.newsId__galleryBtnScroll,
            styles.newsId__galleryBtnScroll_left,
            isAtStart && styles.newsId__galleryBtnScroll_hidden
          )}
          onClick={() => scroll(true)}
        ></button>
      </div>
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
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        isCloseByOverlay={isCloseByOverlay}
        title=""
        className={styles.newsId__popup}
      >
        <div className={styles.newsId__popupGallery}>
          <div className={styles.newsId__popupGalleryLeftContaner}>
            {images.map((img: any, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    styles.newsId__popupGalleryLeftContanerImgContainer
                  }
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className={styles.newsId__galleryImg}
                    onClick={() => setSelectedImg(img)}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.newsId__popupGalleryRightContaner}>
            <Image
              src={selectedImg.src}
              alt="Выбранное изображение"
              width={selectedImg.width}
              height={selectedImg.height}
              className={styles.newsId__galleryImg}
            />
          </div>
        </div>
      </Popup>
    </div>
  );
};
