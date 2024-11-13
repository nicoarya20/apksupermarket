import { Box } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';

function LayoutNavbarhome({children}:{children: React.ReactNode}) {
  return (
    <Box pt={25} pb={25} pl={20} pr={20} pos={"sticky"} top={0} bg={WARNA.bgTombol} style={{
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      zIndex: 100,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    }}>
      {children}
    </Box>
  );
}

export default LayoutNavbarhome;
