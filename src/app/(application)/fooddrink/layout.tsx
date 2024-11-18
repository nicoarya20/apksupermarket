'use client'
import { WARNA } from '@/module/_global/fun/WARNA';
import KosonganFeatures from '@/module/_global/layout/kosongan_features';
import { ActionIcon, Box, Flex, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { IoChatbubblesOutline, IoFastFood } from 'react-icons/io5';
import { SlBasket } from 'react-icons/sl';

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <Box>

      <KosonganFeatures>
        <Flex align={"center"} justify={"space-between"} p={20}>
          <ActionIcon onClick={() => router.push("/home")} variant='transparent'>
            <FaArrowLeft size={20} color={WARNA.bgApk} />
          </ActionIcon>
          <Stack gap={0} align='center'  >
            <IoFastFood size={20} color={WARNA.bgApk} />
            <Text c={WARNA.bgApk} fw={"bold"} ta={"center"}>Food & Drink</Text>
          </Stack>
          <Flex>
          <ActionIcon variant='transparent'>
            <SlBasket color={WARNA.bgApk} size={20} />
          </ActionIcon>
          <ActionIcon variant='transparent'>
            <IoChatbubblesOutline color={WARNA.bgApk} size={20} />
          </ActionIcon>
          </Flex>
        </Flex>
        {children}
      </KosonganFeatures>
    </Box>
  );
}

export default Layout;
