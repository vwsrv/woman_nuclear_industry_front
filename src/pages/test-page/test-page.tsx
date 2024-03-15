'use client';

import { Button } from '@/shared/ui/button';
import { Mission } from '@/shared/ui/mission';
import bgimage from '@/shared/images/for-mission/bgimage.svg';
import React from 'react';
export const TestPage: React.FC = () => {
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
      </div>
      <Mission
        title="Миссия"
        text="Формирование профессионального отраслевого женского сообщества и развитие международного сотрудничества в области использования атомной энергии, укрепление горизонтального взаимодействия и эффективной коммуникации между работниками из различных регионов, популяризация научно-технических профессий среди женщин и их всестороннее развитие."
        bgImage={bgimage}
        counters={[
          { value: '140+', label: 'Реализованных проектов' },
          { value: '1500+', label: 'Участниц из 37 субъектов России' },
          { value: '38', label: 'Инициативных групп' },
          { value: '17', label: 'Зарубежных стран' }
        ]}
      ></Mission>
    </div>
  );
};
