import { Box, SimpleGrid, Wrap, Input, Text, Select } from '@chakra-ui/react';
import React from 'react';

export default function BusinessDetails(nextStep) {
  return (
    <div>
      <Box>
        <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Name</Text>
              <Input name='firstName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Type</Text>
              {/* <Input name='lastName' /> */}
              <Select>
                <option>Retail</option>
                <option>Tourism</option>
                <option>Telecommunication</option>
              </Select>
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Certificate</Text>
              <Input name='firstName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business TAX ID Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Email</Text>
              <Input name='firstName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Phone Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Phone Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid>
        {/* <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Email</Text>
              <Input name='firstName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Phone Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid> */}
        <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Email</Text>
              <Input name='firstName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Phone Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Phone Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid>
        {/* <Button onclick={handlecontinue()}>Next</Button> */}
        <Box></Box>
      </Box>
    </div>
  );
}
