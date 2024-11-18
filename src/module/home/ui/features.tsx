'use client'
import { WARNA } from '@/module/_global/fun/WARNA';
import { ActionIcon, Box, Center, Flex, SimpleGrid, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { FaCandyCane } from 'react-icons/fa6';
import { GiCabbage, GiCannedFish, GiClothes, GiSodaCan } from "react-icons/gi";
import { IoFastFood } from 'react-icons/io5';
import { PiOrangeFill } from "react-icons/pi";
import { TbMeat } from 'react-icons/tb';

function Features() {
  const router = useRouter();
  return (
    <>
      <Box pt={10} pb={115}>
        <Text fw={"bold"} fz={"md"}>Features</Text>
        <SimpleGrid
          pt={20}
          cols={{ base: 4, sm: 4, md: 4 }}
        >
          <Box>
            <Center>
              <Box>
                <Flex direction={"column"} gap={0} align='center' wrap={"wrap"}  >
                  <ActionIcon onClick={() => router.push("/fooddrink")} variant='transparent' >
                    <IoFastFood size={25} color={WARNA.bgTombol} />
                  </ActionIcon>
                  <Text fw={"bold"} fz={"xs"}>Food & Drink</Text>
                </Flex>
              </Box>
            </Center>
          </Box>
          <Box>
            <Center>
              <Flex direction={"column"} gap={0} align='center' wrap={"wrap"}>
                <ActionIcon onClick={() => router.push("/vegetables")} variant='transparent'>
                  <GiCabbage size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Vegetables</Text>
              </Flex>
            </Center>
          </Box>
          <Box>
            <Center>
              <Flex direction={"column"} gap={0} align='center' wrap={"wrap"}>
                <ActionIcon variant='transparent'>
                  <GiClothes size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Clothes</Text>
              </Flex>
            </Center>
          </Box>
          <Box>
            <Center>
              <Flex direction={"column"} gap={0} align='center' wrap={"wrap"}>
                <ActionIcon variant='transparent'>
                  <PiOrangeFill size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Fruit</Text>
              </Flex>
            </Center>
          </Box>
          <Box pt={20}>
            <Center>
              <Box>
                <Flex direction={"column"} gap={0} align='center' wrap={"wrap"}>
                  <ActionIcon variant='transparent' >
                    <TbMeat size={25} color={WARNA.bgTombol} />
                  </ActionIcon>
                  <Text fw={"bold"} fz={"xs"}>Meat</Text>
                </Flex>
              </Box>
            </Center>
          </Box>
          <Box pt={20}>
            <Center>
              <Flex direction={"column"} gap={0} align='center' wrap={"wrap"}>
                <ActionIcon variant='transparent'>
                  <GiCannedFish size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Canned Food</Text>
              </Flex>
            </Center>
          </Box>
          <Box pt={20}>
            <Center>
              <Flex direction={"column"} gap={0} align='center' wrap={"wrap"}>
                <ActionIcon variant='transparent'>
                  <GiSodaCan size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Soda</Text>
              </Flex>
            </Center>
          </Box>
          <Box pt={20}>
            <Center>
              <Flex direction={"column"} gap={0} align='center' wrap={"wrap"}>
                <ActionIcon variant='transparent'>
                  <FaCandyCane size={25} color={WARNA.bgTombol} />
                </ActionIcon>
                <Text fw={"bold"} fz={"xs"}>Candy</Text>
              </Flex>
            </Center>
          </Box>
        </SimpleGrid>

      </Box>
    </>
  );
}

export default Features;
