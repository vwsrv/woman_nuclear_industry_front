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

const selectBoxNumbers = [
  { value: '0', label: '1' },
  { value: '1', label: '2' },
  { value: '2', label: '3' },
  { value: '3', label: '4' }
];

const onClick = () => {
  console.log('Button is clicked');
};

export const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test page</h1>
      <div>
        <SelectBox options={selectBoxNumbers} name="00" />
        <SelectBox options={selectBoxExample} variant='violet' name="Выберите категорию" />
        <Button onClick={onClick}>Добавить</Button>
      </div>
    </div>
  );
};
