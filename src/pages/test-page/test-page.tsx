'use client';
import { News } from '@/shared/ui/news'
import {arrayPropsNews} from '@/shared/ui/news/constants'

import { Button } from '@/shared/ui/button';
import React from 'react';
export const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test page</h1>
      <div>
        {arrayPropsNews.map((item, index) => (
          <News key={index} imageUrl={item.imageUrl} date={item.date} title={item.title} link={item.link}/>
        ))}
      </div>
    </div>
  );
};
