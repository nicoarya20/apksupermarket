import { Container, rem } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';

function LayoutBg({children} : {children: React.ReactNode}) {
  return (
    <Container mih={"100vh"} p={0} size={rem(550)} bg={WARNA.bgApk}>
      {children}
    </Container>
  );
}

export default LayoutBg;
