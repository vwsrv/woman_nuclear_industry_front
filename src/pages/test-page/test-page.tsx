'use client';

import { Button } from '@/shared/ui/button';
import React from 'react';
import { ImageLoader } from './../../shared/ui/imageLoader/imageLoader';

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
        <ImageLoader />
      </div>
    </div>
  );
};
