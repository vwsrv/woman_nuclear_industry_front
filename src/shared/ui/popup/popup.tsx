'use-client';

import React from 'react';
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

  return (
    <div
      className={cn(classes.overlay, { [classes.active]: isOpen })}
      onClick={handleClickByOverlay}
    >
      <div className={cn(classes.popup, { [classes.active]: isOpen })}>
        <div className={cn(classes.popupContainer)}>
          <div className={cn(classes.popupHeading)}>
            <h2 className="bold">{title}</h2>
            <button
              className={cn(classes.popupButton)}
              aria-label="Закрыть"
              onClick={onClose}
            />
          </div>
          <div className={cn(classes.popupContent)}>{children}</div>
        </div>
      </div>
    </div>
  );
};
