import LayoutNavbarhome from '@/module/_global/layout/layout_navbar_home';
import React from 'react';
import HeaderFD from './header_f&d';

function LayoutFD({ children }: { children: React.ReactNode }) {

  return (
    <>
    <LayoutNavbarhome components={<HeaderFD />} />
    {children}
    </>
  );
}
export default LayoutFD;
