import { Box, SimpleGrid, Wrap, Input, Text } from '@chakra-ui/react';
import React from 'react';

export default function DirectorDetails() {
  const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };
  
  return (
      <Box>
        <SimpleGrid minChildWidth={{md:'148px'}} width='100%'spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>First Name</Text>
              <Input name='firstName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Middle Name</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth={{md:'148px'}} width='100%'spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Certificate</Text>
              <Input name='firstName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>BVN Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth={{md:'148px'}} width='100%'spacing='15px'>
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
        <SimpleGrid minChildWidth={{md:'148px'}} width='100%'spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Phone Number</Text>
              <Input name='lastName' type='tel' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Attach Passport Photo</Text>
              <Input name='lastName' type='file' p='5px' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>TAX ID</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth={{md:'148px'}} width='100%'spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Upload ID Document</Text>
              <Input name='firstName' type='file' p='5px' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Issue Date</Text>
              <Input name='lastName' type='date' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Expiry Date</Text>
              <Input name='lastName' type='date' />
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
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Phone Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid> */}
        <Box></Box>
      </Box>
  );
}
