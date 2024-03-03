'use-client';

import React from 'react';
('react');
import ReactDOM from 'react-dom';
import classes from './styles.module.scss';
import { PopupOptions } from './types';
import cn from 'classnames';

export const Popup: React.FC<PopupOptions> = props => {
  const {
    isOpen,
    onClose,
    isCloseByOverlay,
    title,
    children,
    actions,
    ...otherProps
  } = props;

  const handleClickByOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isCloseByOverlay && e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={cn(classes.overlay)} onClick={handleClickByOverlay}>
      <div className={cn(classes.popup)}>
        <div className={cn(classes.popupContainer)}>
          <h2>{title}</h2>
          <button
            className={cn(classes.popupButton)}
            aria-label="Закрыть"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </div>,
    document.body
  );
};
