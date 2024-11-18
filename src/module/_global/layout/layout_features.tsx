import { Box, rem } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';

function LayoutFeatures({ children }: { children: React.ReactNode }) {

  return (
    <Box
      w={"100%"}

      h={rem(80)}
      
      m={0} pos={"sticky"} top={0} bg={WARNA.bgTombol} style={{
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      zIndex: 100,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}>
      {children}
    </Box>
  );
}

export default  LayoutFeatures;
