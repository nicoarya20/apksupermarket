import { WARNA } from '@/module/_global/fun/WARNA';
import { ActionIcon, Box, Center, SimpleGrid, Stack, Text } from '@mantine/core';
import React from 'react';
import { IoFastFood } from 'react-icons/io5';
import { GiCabbage, GiCannedFish, GiClothes, GiSodaCan } from "react-icons/gi";
import { PiOrangeFill } from "react-icons/pi";
import { TbMeat } from 'react-icons/tb';
import { FaCandyCane } from 'react-icons/fa6';

function Features() {
  return (
    <>
      <Box pt={10} pb={115}>
        <Text fw={"bold"}  fz={"md"}>Features</Text>
        <SimpleGrid
          pt={20}
          cols={{ base: 4, sm: 4, md: 4 }}
        >
          <Box>
            <Center>
              <Box>
                <Stack gap={0} align='center'>
                  <ActionIcon variant='transparent' >
                    <IoFastFood size={25} color={WARNA.bgTombol} />
                  </ActionIcon>
                  <Text fw={"bold"} fz={"xs"}>Food & Drink</Text>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box>
            <Center>
              <Stack gap={0} align='center'>
              <ActionIcon variant='transparent'>
                <GiCabbage size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Vegetables</Text>
              </Stack>
            </Center>
          </Box>
          <Box>
            <Center>
              <Stack gap={0} align='center'>
              <ActionIcon variant='transparent'>
                <GiClothes size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Clothes</Text>
              </Stack>
            </Center>
          </Box>
          <Box>
            <Center>
              <Stack gap={0} align='center'>
              <ActionIcon variant='transparent'>
                <PiOrangeFill size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Fruit</Text>
              </Stack>
            </Center>
          </Box>
          <Box pt={20}>
            <Center>
              <Box>
                <Stack gap={0} align='center'>
                  <ActionIcon variant='transparent' >
                    <TbMeat size={25} color={WARNA.bgTombol} />
                  </ActionIcon>
                  <Text fw={"bold"} fz={"xs"}>Meat</Text>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box pt={20}>
            <Center>
              <Stack gap={0} align='center'>
              <ActionIcon variant='transparent'>
                <GiCannedFish size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Canned Food</Text>
              </Stack>
            </Center>
          </Box>
          <Box pt={20}>
            <Center>
              <Stack gap={0} align='center'>
              <ActionIcon variant='transparent'>
                <GiSodaCan size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Soda</Text>
              </Stack>
            </Center>
          </Box>
          <Box pt={20}>
            <Center>
              <Stack gap={0} align='center'>
              <ActionIcon variant='transparent'>
                <FaCandyCane size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Candy</Text>
              </Stack>
            </Center>
          </Box>
        </SimpleGrid>

      </Box>
    </>
  );
}

export default Features;
