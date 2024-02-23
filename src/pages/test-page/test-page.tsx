'use client';
import { ProfileMenu } from '@/shared/ui/ProfileMenu';
import { Button } from '@/shared/ui/button';
import { arrayPropsProfileMenu } from '@/shared/ui/ProfileMenu';
import React from 'react';

export const TestPage: React.FC = () => {
  return (
    <div>
      <ProfileMenu titleProps={arrayPropsProfileMenu} />
    </div>
  );
};
