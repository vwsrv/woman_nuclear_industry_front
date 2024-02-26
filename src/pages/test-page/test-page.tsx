'use client';

import { useState } from 'react';
import { Textarea } from '@/shared/ui/textarea';
import { Button } from '@/shared/ui/button';
import React from 'react';
export const TestPage: React.FC = () => {
  const content =
    'Неделя женского технологического лидерства – серия российских и международных мероприятий, направленных на кооперацию и поддержку женщин, создание новых форматов для развития женского профессионального потенциала, коллективного и децентрализованного лидерства женщин из разных стран, являющихся представительницами широкого спектра высокотехнологичных отраслей, а также обмен опытом и лучшими практиками в интересах женщин.Спикерами мероприятий выступят эксперты из Казахстана, Узбекистана, Индонезии, Армении, Турции, Монголии, ОАЭ, Италии, Индии, ЮАР, Таджикистана, Аргентины, России и других стран.Завершающим мероприятием Недели женского технологического лидерства станет Международный форум женщин в высокотехнологичных отраслях «Women in STEM».';
  const [textareaValue, setTextareaValue] = useState(content);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>Test page</h1>
      <div>
        <Button
          disabled={false}
          className="test-class"
          onClick={() => console.log('Test click')}
        >
          Test button
        </Button>
      </div>
      <div
        style={{
          margin: '30px 0',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Textarea
          className="textarea"
          label="Адрес:"
          value={textareaValue}
          setValue={setTextareaValue}
        />
      </div>
    </div>
  );
};
