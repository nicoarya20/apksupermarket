'use client'
import { WARNA } from '@/module/_global/fun/WARNA';
import { Box, Flex, rem, TextInput } from '@mantine/core';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";


function HeaderHome() {
  
  return (
    <Box>
      
        <Flex align={"center"} wrap='wrap' justify='space-between' pt={10} px={20}>
          <TextInput
            radius={"md"}
            w={rem(240)}
            leftSection={<HiMiniMagnifyingGlass color={WARNA.bgTombol} size={20} />}
            placeholder='Cari Produk'
          />
          <Box >
            <Flex gap={10}>
              <SlBasket color={WARNA.bgApk} size={20} />
              <IoChatbubblesOutline color={WARNA.bgApk} size={20} />
            </Flex>
          </Box>
        </Flex>
    </Box>
  );
}

export default HeaderHome;
 