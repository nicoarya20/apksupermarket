import { Box, Stack } from '@mantine/core';
import Content from '../ui/content';

function ViewFD() {
  return (
    <>
      <Box p={20}>
        <Stack>
          <Content />
          <Content />
        </Stack>
      </Box>
    </>
  );
}

export default ViewFD;
