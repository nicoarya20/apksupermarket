import HeaderHome from '@/module/home/ui/header_home';
import { Container, rem } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';
import LayoutFooterHome from './layout_footer_home';
import LayoutNavbarhome from './layout_navbar_home';
import FooterHome from '@/module/home/ui/footer_home';

function LayoutBackground({ children }: { children: React.ReactNode }) {
  return (
    <Container mih={"100vh"} p={0} size={rem(550)} bg={WARNA.bgApk} >
      <LayoutNavbarhome components={<HeaderHome />} />
      <LayoutFooterHome components={<FooterHome />}  />
        {children}
      
    </Container>
  );
}

export default LayoutBackground;
