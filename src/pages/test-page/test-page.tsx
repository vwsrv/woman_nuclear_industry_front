'use client';

import { Button } from '@/shared/ui/button';
import { InputSearch } from '@/shared/ui/inputSearch';
import React from 'react';
export const TestPage: React.FC = () => {

  const [value, setValue] = React.useState('');

  const handleForm = (text: string): void => {
    console.log('Submit:', value);
  }
  // const handleForm = (): void => {
  //   console.log('Submit:', value);
  // }
  console.log('newValue:', value);

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
        <InputSearch
          value={value}
          handleInputChange={setValue}
          handleForm={handleForm}
        />
      </div>
    </div>
  );
};
