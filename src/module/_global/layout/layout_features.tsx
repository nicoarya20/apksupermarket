import HeaderFD from '@/module/food&drink/ui/header_f&d';
import React from 'react';
import LayoutNavbarhome from './layout_navbar_home';

function LayoutFeatures({ children }: { children: React.ReactNode }) {

  return (
    <>
    <LayoutNavbarhome components={<HeaderFD />} />
    {children}
    </>
  );
}

export default  LayoutFeatures;
