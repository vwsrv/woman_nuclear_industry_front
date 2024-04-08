'use client';

import Image from 'next/image';
import cn from 'classnames';
import classes from './styles.module.scss';
import { HeaderMenu } from '../header-menu';
import { headerProps } from './types';
import { headerMenuProps } from '../header-menu/types';
import { InputSearch } from '../inputSearch';
import { Button } from '../button';

export const Header: React.FC<headerProps & headerMenuProps> = ({
  image,
  avatar,
  value,
  links,
  handleInputChange,
  handleForm,
  isLoggedIn,
  isCartExist = false,
  language,
  handleLanguageChange,
  isPageCart = false,
  isCartFilled = false,
  itemsInCart = [1, 2, 3, 4, 5]
}) => {
  return (
    <div className={cn(classes.header)}>
      <Image
        className={cn(classes.header__logo)}
        src={image.src}
        alt="логотип WinRussia территория смыслов"
        width={image.width}
        height={image.height}
      ></Image>
      <div className={cn(classes.header__container)}>
        <div className={cn(classes.header__nav)}>
          <InputSearch
            value={value}
            handleInputChange={handleInputChange}
            handleForm={handleForm}
          />
          <HeaderMenu className={cn(classes.header__navMenu)} links={links} />
        </div>
        <div className={cn(classes.header__buttons)}>
          <button
            className={cn(classes.header__button)}
            onClick={handleLanguageChange}
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </button>
          {isCartExist && (
            <button
              className={cn(
                classes.header__button,
                isPageCart
                  ? isCartFilled
                    ? classes.header__button_cartActiveFilled
                    : classes.header__button_cartActive
                  : isCartFilled
                    ? classes.header__button_cartFilled
                    : classes.header__button_cart
              )}
              data-text={isCartFilled ? itemsInCart.length : ''}
            ></button>
          )}

          {isLoggedIn ? (
            <button
              className={cn(
                classes.header__button,
                classes.header__button_avatar
              )}
            >
              <Image
                className={cn(classes.header__buttonAvatarImage)}
                src={avatar?.src || image.src}
                alt="аватар"
                width={avatar?.width || image.width}
                height={avatar?.height || image.height}
              />
            </button>
          ) : (
            <Button variant="blue" className={classes.header__buttonLogin}>
              Вход
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
