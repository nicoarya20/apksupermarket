'use client'
import { WARNA } from '@/module/_global/fun/WARNA';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Box, Stack, Text } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { GiCabbage, GiClothes } from 'react-icons/gi';
import { IoFastFood } from 'react-icons/io5';

function Bergerak() {
  const autoplay = useRef(Autoplay({delay: 3000}));
  return (
    <Box pt={100}>
      <Carousel
        withIndicators
        height={200}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        loop

      >
        <CarouselSlide>
          <Stack gap={0} justify='center' align='center'>   
            <GiCabbage color={WARNA.bgTombol} size={90} />
            <Text fw={"bold"}>Vegetables</Text>
          </Stack>
        </CarouselSlide>
        <CarouselSlide>
          <Stack gap={0} justify='center' align='center'>   
            <GiClothes color={WARNA.bgTombol} size={90} />
            <Text fw={"bold"}>Clothes</Text>
          </Stack>
        </CarouselSlide>
        <CarouselSlide>
          <Stack gap={0} justify='center' align='center'>   
            <IoFastFood color={WARNA.bgTombol} size={90} />
            <Text fw={"bold"}>Food & Drink</Text>
          </Stack>
        </CarouselSlide>
      </Carousel>
      </Box>
  );
}

export default Bergerak;
