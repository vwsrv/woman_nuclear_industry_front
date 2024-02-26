'use client';

import { Button } from '@/shared/ui/button';
import { SelectBox } from '@/shared/ui/selectbox';
import React from 'react';

const selectBoxExample = [
  { value: '1', label: 'Физика' },
  { value: '2', label: 'Биология' },
  { value: '3', label: 'Социология' }
];

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
        <SelectBox
          disabled={false}
          options={selectBoxExample}
          className="test-class"
        ></SelectBox>
      </div>
    </div>
  );
};
