'use client';

import { Button } from '@/shared/ui/button';
import React from 'react';
import { Accordition } from '@/shared/ui/accordition';

export const TestPage: React.FC = () => {
  return (
    <div>
      <Accordition
        onClick={() => console.log('Test click')}
        title="Test accordition"
      >
        <p>Test accordition</p>
      </Accordition>
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
