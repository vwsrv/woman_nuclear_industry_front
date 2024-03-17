'use client';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import React from 'react';
export const TestPage: React.FC = () => {
  const [value, setValue] = React.useState<string>('sdfsdf11');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const [value1, setValue1] = React.useState<string>('');

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue1(e.target.value);
  };

  return (
    <div>
      <h1>Test page</h1>
      {/* <div>
        <Button
          disabled={false}
          className="test-class"
          onClick={() => console.log('Test click')}
        >
          Test button
        </Button>
      </div> */}

      <div
        style={{
          maxWidth: '440px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column'
          // backgroundColor: '#f99'
          // justifyContent: 'center',
        }}
      >
        <div style={{ margin: '0 0 20px' }}>
          <Input
            label="Ваше имя и фамилия:"
            required={false}
            value={value1}
            onChange={handleChange1}
            name="name"
            type="text"
          />
        </div>

        <div style={{ margin: '0 0 20px' }}>
          <Input
            label="Обязательное поле:"
            required={true}
            value={value}
            onChange={handleChange}
            name="requeridField"
            type="text"
            // className="test-class"
            // disabled={true}
          />
        </div>
      </div>
    </div>
  );
};
