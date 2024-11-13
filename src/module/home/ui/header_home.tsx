import { WARNA } from '@/module/_global/fun/WARNA';
import LayoutNavbarhome from '@/module/_global/layout/layout_navbar_home';
import { Box, Group, Text } from '@mantine/core';
import React from 'react';
import { HiBell, HiMiniMagnifyingGlass, HiUser } from "react-icons/hi2";

function HeaderHome() {
  return (
    <Box>
      <LayoutNavbarhome>
        <Group justify='space-between'>
          <Text c={"white"} fw={"bold"} fz={"md"}>Supermarket</Text>
          <Box>
            <Group>
              <HiMiniMagnifyingGlass color={WARNA.bgApk} size={20} />
              <HiBell color={WARNA.bgApk} size={20} />
              <HiUser color={WARNA.bgApk} size={20}/>
            </Group>
          </Box>
        </Group>
      </LayoutNavbarhome>
    </Box>
  );
}

export default HeaderHome;
