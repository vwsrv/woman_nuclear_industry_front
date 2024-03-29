'use client';

import { Button } from '@/shared/ui/button';
import React from 'react';
import { Pagination } from '../../shared/ui/pagination/pagination';

export const TestPage: React.FC = () => {
  const [activePage, setActivePage] = React.useState(100)
  const [itemsPerPage, setItemsPerPage] = React.useState<9 | 18 | 30>(9)
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
        <Pagination
          activePage={activePage}
          itemsPerPage={itemsPerPage}
          totalPages={1000}
          setActivePage={setActivePage}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
    </div>
  );
};
