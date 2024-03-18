'use client';

import { Button } from '@/shared/ui/button';
import React, { useState } from 'react';
import { Popup } from '@/shared/ui/popup';
export const TestPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Test page</h1>
      <div>
        <Button disabled={false} className="test-class" onClick={onOpen}>
          Test button
        </Button>
        <Popup
          isOpen={isOpen}
          isCloseByOverlay={isOpen}
          onClose={onClose}
          title="Профиль"
          isMounted={true}
        >
          <div>Я первый</div>
          <div>Я второй</div>
        </Popup>
      </div>
    </div>
  );
};
