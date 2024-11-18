import { Box, Container, rem, Stack } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';
import LayoutHome from './layout_home';

function KosonganHome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Stack align='center'>
        <Box bg={"light"} pos={"fixed"} h={"100%"} w={"100%"} style={{ overflowY: "auto" }}>
          <Container mih={"100vh"} p={0} size={rem(550)} bg={WARNA.bgApk}>
            <LayoutHome>
              {children}
            </LayoutHome>
          </Container>
        </Box>
      </Stack>
    </>
  );
}

export default KosonganHome;
