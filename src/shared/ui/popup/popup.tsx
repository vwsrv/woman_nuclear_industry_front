'use client';

import React, { useEffect, useState } from 'react';
import classes from './styles.module.scss';
import { PopupOptions } from './types';
import cn from 'classnames';
import ReactDOM from 'react-dom';

export const Popup: React.FC<PopupOptions> = props => {
  const {
    isOpen,
    onClose,
    isCloseByOverlay,
    title,
    children,
    actions,
    variant = 'default',
    className,
    ...otherProps
  } = props;

  const handleClickByOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isCloseByOverlay && e.target === e.currentTarget) {
      onClose();
    }
  };

  const [isMounted, setIsMounted] = useState<boolean>(true);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted
    ? ReactDOM.createPortal(
        <div
          className={cn(classes.overlay, { [classes.active]: isOpen })}
          onClick={handleClickByOverlay}
        >
          <div
            className={cn(
              classes.popup,
              { [classes.active]: isOpen },
              classes[variant]
            )}
          >
            <div className={cn(classes.popupContainer)}>
              {title && (
                <div className={cn(classes.popupHeading)}>
                  <h2 className="bold">{title}</h2>
                </div>
              )}
              {variant === 'uploadImage' ? (
                <>{children}</>
              ) : (
                <>
                  <button
                    className={cn(classes.popupButton)}
                    aria-label="Закрыть"
                    onClick={onClose}
                  />
                  <div className={cn(classes.popupContent)}>{children}</div>
                </>
              )}
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};
