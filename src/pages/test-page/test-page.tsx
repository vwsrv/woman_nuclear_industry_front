'use client';

import { Button } from '@/shared/ui/button';
import React from 'react';
import { Event } from '../../shared/ui/event/event';

export const TestPage: React.FC = () => {
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

      <Event 
        title='Онлайн встреча Книжного клуба «Росатома»'
        evntType='Воркшопы'
        date='15 сентября, 19:00'
        />

    </div>
   
  );
};