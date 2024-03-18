'use client';

import { Button } from '@/shared/ui/button';
import { InputSearch } from '@/shared/ui/inputSearch';
import React from 'react';
export const TestPage: React.FC = () => {

  const [inputValue, setInputValue] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };


  const handleSearch = (e: any): void => {
    e.preventDefault();
    // setInputValue(e.target.value);
    console.log('Форма отправлена', e);
  };


  return (
    <div>
      <h1>Test page</h1>
      <div>
        {/* <Button
          disabled={false}
          className="test-class"
          onClick={() => console.log('Test click')}
        >
          Test button
        </Button> */}

        <form
          action="#"
          onSubmit={handleSearch}
          noValidate
        >
          <InputSearch
            value={inputValue}
            onChange={handleChange}
            // className="test-class"
          />
        </form>

      </div>
    </div>
  );
};
