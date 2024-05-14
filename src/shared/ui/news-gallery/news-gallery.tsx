'use client';

import { INewsGalleryProps } from '@/shared/ui/news-gallery/types';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import popupStyles from '../popup/styles.module.scss';
import Image from 'next/image';
import { Popup } from '@/shared/ui/popup';

export const NewsGallery: React.FC<INewsGalleryProps> = ({ images }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [selectedImg, setSelectedImg] = useState(images[0]);

  const handleImgOpen = (img: any) => {
    const index = images.findIndex((image: any) => image.src === img.src);
    setCurrentImgIndex(index);
    setSelectedImg(img);
    setIsOpen(true);
  };
  const handleNextImg = () => {
    const nextIndex = (currentImgIndex + 1) % images.length;
    setSelectedImg(images[nextIndex]);
    setCurrentImgIndex(nextIndex);
  };

  useEffect(() => {
    if (galleryRef.current) {
      const galleryElement = galleryRef.current as HTMLElement;
      const isAtEnd =
        galleryElement.scrollLeft + galleryElement.clientWidth >=
        galleryElement.scrollWidth - 100;
      setIsAtEnd(isAtEnd);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isCloseByOverlay, setIsCloseByOverlay] = useState(true);

  const [leftContainerHeight, setLeftContainerHeight] = useState('auto');

  useEffect(() => {
    const rightContainer = document.querySelector(
      `.${styles.gallery__popupGalleryRightContaner}`
    );
    if (rightContainer instanceof HTMLElement) {
      const height = rightContainer.offsetHeight;
      setLeftContainerHeight(`${height}px`);
    }
  }, []);

  useEffect(() => {
    const popupCloseButton = document.querySelector(
      `.${popupStyles.popupButton}`
    );
    if (popupCloseButton instanceof HTMLElement) {
      popupCloseButton.classList.add(`${popupStyles.popupButton_white}`);
    }
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      const rightContainer = document.querySelector(
        `.${styles.gallery__popupGalleryRightContaner}`
      );
      if (rightContainer instanceof HTMLElement) {
        const height = rightContainer.offsetHeight;
        setLeftContainerHeight(`${height}px`);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

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
    <>
      <div
        className={styles.gallery}
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
              className={`${styles.gallery__imgContainer} ${isDoubleRow ? `${styles.gallery__imgContainer_doubleRow}` : ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={styles.gallery__img}
                onClick={() => handleImgOpen(img)}
              />
            </div>
          );
        })}
        <div
          className={cn(
            styles.gallery__btnScrollBg,
            styles.gallery__btnScrollBg_left,
            isAtStart && styles.gallery__btnScrollBg_hidden
          )}
        ></div>
        <div
          className={cn(
            styles.gallery__btnScrollBg,
            styles.gallery__btnScrollBg_right,
            isAtEnd && styles.gallery__btnScrollBg_hidden
          )}
        ></div>
        <button
          className={cn(
            styles.gallery__btnScroll,
            styles.gallery__btnScroll_right,
            isAtEnd && styles.gallery__btnScroll_hidden
          )}
          onClick={() => scroll(false)}
        ></button>
        <button
          className={cn(
            styles.gallery__btnScroll,
            styles.gallery__btnScroll_left,
            isAtStart && styles.gallery__btnScroll_hidden
          )}
          onClick={() => scroll(true)}
        ></button>
      </div>
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        isCloseByOverlay={isCloseByOverlay}
        title=""
        className={styles.gallery__popup}
      >
        <div className={styles.gallery__popupGallery}>
          <div
            className={styles.gallery__popupGalleryLeftContaner}
            style={{ height: leftContainerHeight }}
          >
            {images.map((img: any, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    styles.gallery__popupGalleryLeftContanerImgContainer
                  }
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className={styles.gallery__img}
                    onClick={() => setSelectedImg(img)}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.gallery__popupGalleryRightContaner}>
            <Image
              src={selectedImg.src}
              alt="Выбранное изображение"
              width={selectedImg.width}
              height={selectedImg.height}
              className={cn(styles.gallery__img, styles.gallery__img_selected)}
            />
            <button
              className={styles.gallery__popupNextImgBtn}
              onClick={handleNextImg}
            ></button>
          </div>
        </div>
      </Popup>
    </>
  );
};
