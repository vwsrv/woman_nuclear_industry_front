'use client';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import React from 'react';

export const TestPage: React.FC = () => {
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

      <div style={{
        padding: '20px',
        display:'flex',
        flexDirection: 'column',
        backgroundColor: '#f99',
        // justifyContent: 'center',
        }}>

        <div style = {{ backgroundColor: '#fff', maxWidth: '800px', margin: '0 0 20px', padding: '5px', }}>
          <Input
            placeholder = 'Поиск'
            variant = 'search'
            required = {false}
            label = ''
            // value = ''
            // className="test-class"
            // disabled={false}
            // defaultValue="Текст в поле ввода"
          />
        </div>
        
        <div style = {{
          backgroundColor: '#909',
          maxWidth: '400px',
          margin: '0 0 20px',
          padding: '5px',
          }}>
          <Input
            label='Ваше имя и фамилия:'
            required = {true}
            // value = ''
            // className="test-class"
            // disabled={true}
          />
        </div>

        <div style = {{
          backgroundColor: '#990',
          maxWidth: '400px',
          margin: '0 0 20px',
          padding: '5px',
          }}>
          <Input
            label='Ваше имя и фамилия:'
            required = {true}
            value = 'sdf'
            // className="test-class"
            // disabled={true}
          />
        </div>

      </div>
    </div>
  );
};
