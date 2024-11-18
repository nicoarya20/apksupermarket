import { WARNA } from '@/module/_global/fun/WARNA';
import { Box, Card, Center, Image, SimpleGrid, Text } from '@mantine/core';

function Content() {
  return (
    <Box p={20}>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        <Box>
          <Card p={20} bg={WARNA.bgApk} withBorder style={{ borderColor: WARNA.bgTombol }}>
            <Center>
              <Image radius={"lg"} src={"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2240,c_limit/Smashburger-recipe-120219.jpg"} alt='' w={100} />
            </Center>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Burger</Text>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Rp. 20.000</Text>
          </Card>
        </Box>
        <Box>
          <Card p={20} bg={WARNA.bgApk} withBorder style={{ borderColor: WARNA.bgTombol }}>
            <Center>

              <Image radius={"lg"} src={"https://h7.alamy.com/comp/D2X5YG/can-of-coca-cola-D2X5YG.jpg"} alt='' w={65} />
            </Center>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Burger</Text>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Rp. 20.000</Text>
          </Card>
        </Box>
        <Box>
          <Card p={20} bg={WARNA.bgApk} withBorder style={{ borderColor: WARNA.bgTombol }}>
            <Center>
              <Image radius={"lg"} src={"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2240,c_limit/Smashburger-recipe-120219.jpg"} alt='' w={100} />
            </Center>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Burger</Text>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Rp. 20.000</Text>
          </Card>
        </Box>
        <Box>
          <Card p={20} bg={WARNA.bgApk} withBorder style={{ borderColor: WARNA.bgTombol }}>
            <Center>
              <Image radius={"lg"} src={"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2240,c_limit/Smashburger-recipe-120219.jpg"} alt='' w={100} />
            </Center>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Burger</Text>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Rp. 20.000</Text>
          </Card>
        </Box>
        <Box>
          <Card p={20} bg={WARNA.bgApk} withBorder style={{ borderColor: WARNA.bgTombol }}>
            <Center>
              <Image radius={"lg"} src={"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2240,c_limit/Smashburger-recipe-120219.jpg"} alt='' w={100} />
            </Center>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Burger</Text>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Rp. 20.000</Text>
          </Card>
        </Box>
        <Box>
          <Card p={20} bg={WARNA.bgApk} withBorder style={{ borderColor: WARNA.bgTombol }}>
            <Center>
              <Image radius={"lg"} src={"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2240,c_limit/Smashburger-recipe-120219.jpg"} alt='' w={100} />
            </Center>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Burger</Text>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Rp. 20.000</Text>
          </Card>
        </Box>
        <Box>
          <Card p={20} bg={WARNA.bgApk} withBorder style={{ borderColor: WARNA.bgTombol }}>
            <Center>
              <Image radius={"lg"} src={"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2240,c_limit/Smashburger-recipe-120219.jpg"} alt='' w={100} />
            </Center>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Burger</Text>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Rp. 20.000</Text>
          </Card>
        </Box>
        <Box>
          <Card p={20} bg={WARNA.bgApk} withBorder style={{ borderColor: WARNA.bgTombol }}>
            <Center>
              <Image radius={"lg"} src={"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2240,c_limit/Smashburger-recipe-120219.jpg"} alt='' w={100} />
            </Center>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Burger</Text>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Rp. 20.000</Text>
          </Card>
        </Box>
        <Box>
          <Card p={20} bg={WARNA.bgApk} withBorder style={{ borderColor: WARNA.bgTombol }}>
            <Center>
              <Image radius={"lg"} src={"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2240,c_limit/Smashburger-recipe-120219.jpg"} alt='' w={100} />
            </Center>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Burger</Text>
            <Text ta={"center"} fw={"bold"} fz={"sm"}>Rp. 20.000</Text>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Content;
