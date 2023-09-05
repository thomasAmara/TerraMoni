import { Box, SimpleGrid, Wrap, Input, Text } from '@chakra-ui/react';
import React from 'react';

export default function Uploads() {
  return (
    <div>
      <Box>
        <SimpleGrid minChildWidth={{md:'148px'}} width='100%'spacing='15px'>
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
        <SimpleGrid minChildWidth={{md:'148px'}} width='100%'spacing='15px'>
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

        <SimpleGrid width={{base: '100%', md: '50%'}}>
          <Box>
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
