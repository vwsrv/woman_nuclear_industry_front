'use client';

import { Button } from '@/shared/ui/button';
import React, { useState } from 'react';
import { Popup } from '@/shared/ui/popup';
export const TestPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onPopupOpen = () => {
    setIsOpen(true);
  };

  const onPopupClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Test page</h1>
      <div>
        <Button disabled={false} className="test-class" onClick={onPopupOpen}>
          Test button
        </Button>
        <Popup
          isOpen={isOpen}
          onClose={onPopupClose}
          isCloseByOverlay={isOpen}
          title="Профиль"
        >
          <div>Я первый контейнер с картинками</div>
          <div>Я второй контейнер</div>
        </Popup>
      </div>
    </div>
  );
};
