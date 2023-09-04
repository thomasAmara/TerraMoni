import { Box, SimpleGrid, Wrap, Input, Text } from '@chakra-ui/react';
import React from 'react';

export default function Uploads() {
  return (
    <div>
      <Box backgroundColor='red' columns={[1, 2]}>
        <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Certificate of Incorporation</Text>
              <Input name='firstName' p='5px' type='file' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Type</Text>
              <Input name='lastName' p='5px' type='file' />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Certificate</Text>
              <Input name='firstName' p='5px' type='file' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business TAX ID Number</Text>
              <Input name='lastName' p='5px' type='file' />
            </Wrap>
          </Box>
        </SimpleGrid>

        <SimpleGrid>
          <Box width='50%'>
            <Wrap>
              <Text color='#942F8B'>Business Phone Number</Text>
              <Input name='lastName' p='5px' type='file' />
            </Wrap>
          </Box>
        </SimpleGrid>

        <Box></Box>
      </Box>
    </div>
  );
}
