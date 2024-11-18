import { WARNA } from '@/module/_global/fun/WARNA';
import { Box, Container, rem, Stack } from '@mantine/core';
import React from 'react';
import LayoutFD from './layout_f&d';

function KosonganFD({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Stack align='center'>
        <Box bg={"light"} pos={"fixed"} h={"100%"} w={"100%"} style={{ overflowY: "auto" }}>
          <Container mih={"100vh"} p={0} size={rem(550)} bg={WARNA.bgApk}>
            <LayoutFD>
              {children}
            </LayoutFD>
          </Container>
        </Box>
      </Stack>
    </>
  );
}

export default KosonganFD;

