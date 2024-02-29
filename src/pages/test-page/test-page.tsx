'use client';

import { Button } from '@/shared/ui/button';
import { Highlight } from '@/shared/ui/highlight';
import React from 'react';
import bgimage from '@/shared/images/for-highlight/bgimage.svg';

export const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test page</h1>
      <div>
        <Highlight
          title="Поддержка проектов"
          content={
            <>
              <p>
                Хотите стать участником самого крупного женского научного
                сообщества в России, партнером или инфопартнером, волонтером,
                колумнистом блога, меценатом? Оставьте заявку ниже или
                поддержите проект!
              </p>
              <Button
                disabled={false}
                className="test-class"
                onClick={() => console.log('Test click')}
              >
                Test button
              </Button>
            </>
          }
          bgImage={bgimage}
        />
      </div>
    </div>
  );
};
