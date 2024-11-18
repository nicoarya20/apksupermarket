import FooterHome from '@/module/home/ui/footer_home';
import HeaderHome from '@/module/home/ui/header_home';
import React from 'react';
import LayoutFooterHome from './layout_footer_home';
import LayoutNavbarhome from './layout_navbar_home';

function LayoutHome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutNavbarhome components={<HeaderHome />} />
      <LayoutFooterHome components={<FooterHome />}  />
        {children}
      
    </>
  );
}

export default LayoutHome;
