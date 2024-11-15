'use client'
import { Box, rem } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';

function LayoutFooterHome({ components }: { components?: React.ReactNode }) {
  
  return (
    <Box  m={0} pos={"fixed"} bottom={0} bg={WARNA.bgTombol} style={{
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      zIndex: 100,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      maxWidth: rem(550)
    }}
      w={"100%"}
      h={rem(70)}
    
    >
      {components}
   </Box>
  );
}

export default LayoutFooterHome;
