import { Container, rem } from '@mantine/core';
import { WARNA } from '../fun/WARNA';
import React from 'react';

function LayoutBackground({children} : {children: React.ReactNode}) {
  return (
    <Container mih={"100vh"} p={0} size={rem(550)} bg={WARNA.bgApk} >
      {children}
    </Container>
  );
}

export default LayoutBackground;
