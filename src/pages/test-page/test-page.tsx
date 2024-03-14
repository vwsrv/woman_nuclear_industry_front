'use client';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import React from 'react';
export const TestPage: React.FC = () => {

  const [value, setValue] = React.useState('ssdf');

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
            name="name"
            type="text"
            setValue={setValue}
            // value = ''
            // className="test-class"
            // disabled={true}
          />
        </div>

        <div style={{ margin: '0 0 20px' }}>
          <Input
            label="Обязательное поле:"
            required={true}
            value={value}
            setValue={setValue}
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
