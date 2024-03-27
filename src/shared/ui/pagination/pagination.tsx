'use client';

import { typePaginationProps } from '@/shared/ui/pagination/types';
import classes from './styles.module.scss';
import cn from 'classnames';
import React from 'react';

export const Pagination: React.FC<typePaginationProps> = props => {
  const {
    activePage = 1,
    totalPages,
    itemsPerPage = 9,
    setActivePage,
    setItemsPerPage
  } = props;

  const [pagesArray, setPagesArray] = React.useState(
    Array(totalPages)
      .fill(1)
      .map((_, i) => i + 1)
  );
  const [visiblePages, setVisiblePages] = React.useState(
    pagesArray.slice(0, 3)
  );

  const handleChangeActivePage = (
    evt: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const item = Number(evt.currentTarget.textContent);
    setActivePage(item);
    if (item == visiblePages[0] && item != 1) {
      setVisiblePages(pagesArray.slice(item - 2, item + 1));
    } else if (
      item == visiblePages[visiblePages.length - 1] &&
      item !== totalPages
    ) {
      setVisiblePages(pagesArray.slice(item - 2, item + 1));
    }
  };

  const handleChangeItemsPerPage = (
    evt: React.MouseEvent<HTMLButtonElement>
  ): void => {
    evt.currentTarget.textContent !== null &&
      setItemsPerPage(Number(evt.currentTarget.textContent));
  };

  const handleClickNavigateArrow = (
    evt: React.MouseEvent<HTMLButtonElement>
  ): void => {
    if (evt.currentTarget.id == 'left-button' && activePage > 1) {
      setActivePage(activePage - 1);
      if (activePage == visiblePages[1] && activePage != 2) {
        setVisiblePages(pagesArray.slice(activePage - 3, activePage));
      }
    } else if (
      evt.currentTarget.id == 'right-button' &&
      activePage < totalPages
    ) {
      setActivePage(activePage + 1);
      if (
        activePage == visiblePages[visiblePages.length - 2] &&
        activePage !== totalPages - 1
      ) {
        setVisiblePages(pagesArray.slice(activePage - 1, activePage + 2));
      }
    }
  };

  const handleClickLastPage = (): void => {
    setActivePage(totalPages);
    setVisiblePages(pagesArray.slice(totalPages - 3));
  };

  const handleClickFirstPage = (): void => {
    setActivePage(1);
    setVisiblePages(pagesArray.slice(0, 3));
  };

  React.useEffect(() => {
    setPagesArray(
      Array(totalPages)
        .fill(1)
        .map((_, i) => i + 1)
    );
    handleClickFirstPage();
  }, [totalPages]);

  return (
    <div className={cn(classes['pagination'])}>
      <div className={cn(classes['pagination__total-pages'])}>
        <p className={cn(classes['pagination__total-pages-caption'])}>
          Показывать на странице:
        </p>
        <button
          onClick={handleChangeItemsPerPage}
          className={cn(
            classes['pagination__number-button'],
            9 == itemsPerPage && classes['pagination__number-button_active']
          )}
        >
          9
        </button>
        <button
          onClick={handleChangeItemsPerPage}
          className={cn(
            classes['pagination__number-button'],
            18 == itemsPerPage && classes['pagination__number-button_active']
          )}
        >
          18
        </button>
        <button
          onClick={handleChangeItemsPerPage}
          className={cn(
            classes['pagination__number-button'],
            30 == itemsPerPage && classes['pagination__number-button_active']
          )}
        >
          30
        </button>
      </div>
      <div className={cn(classes['pagination__wrapper'])}>
        <button
          onClick={handleClickNavigateArrow}
          id="left-button"
          className={cn(classes['pagination__arrow-left-button'])}
        ></button>
        {visiblePages[0] != 1 && (
          <button
            onClick={handleClickFirstPage}
            className={cn(classes['pagination__number-button'])}
          >
            {1}
          </button>
        )}
        {visiblePages[0] != 1 && (
          <span className={cn(classes['pagination__ellipsis'])}>...</span>
        )}
        {visiblePages.map((item, index) => (
          <button
            onClick={handleChangeActivePage}
            key={index}
            className={cn(
              classes['pagination__number-button'],
              item === activePage && classes['pagination__number-button_active']
            )}
          >
            {item}
          </button>
        ))}
        {visiblePages[visiblePages.length - 1] != totalPages && (
          <span className={cn(classes['pagination__ellipsis'])}>...</span>
        )}
        {visiblePages[visiblePages.length - 1] != totalPages && (
          <button
            onClick={handleClickLastPage}
            className={cn(classes['pagination__number-button'])}
          >
            {totalPages}
          </button>
        )}
        <button
          onClick={handleClickNavigateArrow}
          id="right-button"
          className={cn(classes['pagination__arrow-right-button'])}
        ></button>
      </div>
    </div>
  );
};
