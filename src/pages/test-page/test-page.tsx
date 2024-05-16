'use client';

import { NewsPage } from '@/pages/news-page';
import { Button } from '@/shared/ui/button';

import React from 'react';

export const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test page</h1>
      <div>
        <Button disabled={false} className="test-class">
          Test button
        </Button>
      </div>
    </div>
  );
};
