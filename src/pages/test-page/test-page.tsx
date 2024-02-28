'use client';

import { Button } from '@/shared/ui/button';
import { SelectBox } from '@/shared/ui/selectbox';
import React from 'react';
const selectBoxExample = [
  { value: '0', label: 'Биология', link: '#' },
  { value: '1', label: 'Химия', link: '#' },
  { value: '2', label: 'Физика', link: '#' },
  { value: '3', label: 'СПЕЦНОМИНАЦИЯ: ЖЕНЩИНЫ-УЧЕНЫЕ АРКТИКИ', link: '#' }
];

const onClick = () => {
  console.log('Button is clicked');
};

export const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test page</h1>
      <div>
        <SelectBox options={selectBoxExample} name="Выберите категорию" />
        <Button onClick={onClick}>Добавить</Button>
      </div>
    </div>
  );
};
