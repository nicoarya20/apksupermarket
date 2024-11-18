import { Box, Stack } from '@mantine/core';
import Bergerak from '../ui/bergerak';
import Features from '../ui/features';

function ViewHome() {
  return (
    <>
      
      <Box p={20}>
        <Stack>
          <Bergerak/>
          <Features />
        </Stack>
      </Box>
      
    </>
  );
}

export default ViewHome;
