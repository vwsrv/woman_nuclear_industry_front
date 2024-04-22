import React from 'react';
import '../src/app/styles/contentLayout.css';

const ContentLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default ContentLayout;
