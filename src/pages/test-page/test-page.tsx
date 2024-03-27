'use client';

import { Button } from '@/shared/ui/button';
import React from 'react';
import { Pagination } from '../../shared/ui/pagination/pagination';
export const TestPage: React.FC = () => {
  const [activePage, setActivePage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(9)

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
        <Pagination setItemsPerPage={setItemsPerPage} setActivePage={setActivePage} itemsPerPage={itemsPerPage} activePage={activePage} totalPages={26} />
      </div>
    </div>
  );
};
