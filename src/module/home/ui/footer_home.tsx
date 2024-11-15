'use client'
import { ActionIcon, Box, Center, Flex, Group, Text } from '@mantine/core';
import { FaBoxesPacking } from "react-icons/fa6";
import { FiBell } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";

import { WARNA } from '@/module/_global/fun/WARNA';
import { useMediaQuery } from '@mantine/hooks';

function FooterHome() {
  const isMobile = useMediaQuery("(max-width: 551px)");
  return (
    <Box pt={10}>
        <Center>
          <Flex direction={"row"} wrap={"wrap"} align={"center"} justify={"space-between"}  >
            <Group gap={30}>
              <Box>
                <Flex direction={"column"} wrap={"wrap"} align={"center"} gap={5}>
                  <ActionIcon variant='transparent'>
                    <IoHome size={isMobile ? 15 : 20} color={WARNA.bgApk} />
                  </ActionIcon>
                  <Text fw={"bold"} c={WARNA.bgApk} ta={"center"} fz={isMobile ? 10 : 12}>Home</Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction={"column"} wrap={"wrap"} align={"center"} gap={5}>
                  <ActionIcon variant='transparent'>
                    <FaBoxesPacking size={isMobile ? 15 : 20} color={WARNA.bgApk} />
                  </ActionIcon>
                  <Text fw={"bold"} c={WARNA.bgApk} ta={"center"} fz={isMobile ? 10 : 12}>Produk Baru</Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction={"column"} wrap={"wrap"} align={"center"} gap={5}>
                  <ActionIcon variant='transparent'>
                    <MdLiveTv size={isMobile ? 15 : 20} color={WARNA.bgApk} />
                  </ActionIcon>
                  <Text fw={"bold"} c={WARNA.bgApk} ta={"center"} fz={isMobile ? 10 : 12}>Live & Video</Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction={"column"} wrap={"wrap"} align={"center"} gap={5}>
                  <ActionIcon variant='transparent'>
                    <FiBell size={isMobile ? 15 : 20} color={WARNA.bgApk} />
                  </ActionIcon>
                  <Text fw={"bold"} c={WARNA.bgApk} ta={"center"} fz={isMobile ? 10 : 12}>Notifikasi</Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction={"column"} wrap={"wrap"} align={"center"} gap={5}>
                  <ActionIcon variant='transparent'>
                    <RiUser3Fill size={isMobile ? 15 : 20} color={WARNA.bgApk} />
                  </ActionIcon>
                  <Text fw={"bold"} c={WARNA.bgApk} ta={"center"} fz={isMobile ? 10 : 12}>Saya</Text>
                </Flex>
              </Box>
            </Group>
          </Flex>
        </Center>
     
    </Box>
  );
}

export default FooterHome;
