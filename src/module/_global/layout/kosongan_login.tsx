import { Box, Container, rem, Stack } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';

function KosonganLogin({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Stack>
        <Box bg={"dark"} pos={"fixed"} h={"100%"} w={"100%"} style={{ overflowY: "auto" }}>
          <Container mih={"100vh"} p={0} size={rem(550)} bg={WARNA.bgApk}>
            {children}
          </Container>
        </Box>
      </Stack>
    </>
  );
}

export default KosonganLogin;
