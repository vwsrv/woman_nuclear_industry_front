'use client';

import { Button } from '@/shared/ui/button';
import React from 'react';
import { ContactMap } from '@/shared/ui/contact-map';

export const TestPage: React.FC = () => {
  const coords = [59.961656, 30.29801];
  return (
    <div>
      <h1>Test page</h1>
      <div>
        <Button
          disabled={false}
          className="test-class"
          onClick={() => console.log('Test click')}
        >
          Test button
        </Button>
      </div>
      <div>
        <ContactMap
          address="Москва, Волоколамское шоссе, д. 108, оф. 19, 125424"
          buisnessHours={`Пн. - Пт: С 10:00 до 18:00\nСуббота и воскресенье - выходные`}
          email="info@win-russia.com"
          coordinats={coords}
        />
      </div>
    </div>
  );
};
