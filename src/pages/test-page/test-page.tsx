'use client';

import { Button } from '@/shared/ui/button';
import React from 'react';
import { Accordion } from '@/shared/ui/accordion';

export const TestPage: React.FC = () => {
  return (
    <div>
      <Accordion
        title="Экологические и социальные проекты"
        onClick={() => console.log('Test click')}
      >
        <p style={{ margin: 0 }}>
          
        </p>
      </Accordion>
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
    </div>
  );
};
