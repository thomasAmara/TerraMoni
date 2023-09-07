import { Box, SimpleGrid, Wrap, Input, Text, Select } from '@chakra-ui/react';
import React from 'react';

export default function BusinessDetails(nextStep) {
  // const breakpoints = {
  //   base: "0px",
  //   sm: "320px",
  //   md: "768px",
  //   lg: "960px",
  //   xl: "1200px",
  //   "2xl": "1536px",
  // };

  return (
      <Box>
        {/* <Text fontSize='18px'>Please enter your infomation and proceed to the next step so we can build your account</Text> */}
        <SimpleGrid minChildWidth={{md:'148px'}} width='100%' spacing='15px'>
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
        <SimpleGrid minChildWidth={{md:'148px'}} width='100%'spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Certificate</Text>
              <Input name='firstName' type='file'/>
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business TAX ID Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth={{md:'148px'}} width='100%' spacing='15px'>
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
              <Text color='#942F8B'>Business Phone Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth={{md:'148px'}} width={{sm: "50%", md:'100%'}} spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Certificate</Text>
              <Input name='firstName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Registration Number</Text>
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
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Phone Number</Text>
              <Input name='lastName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Email</Text>
              <Input name='firstName' />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Email</Text>
              <Input name='firstName' />
            </Wrap>
          </Box>
        </SimpleGrid>
        {/* <Button onclick={handlecontinue()}>Next</Button> */}
        <Box></Box>
      </Box>
  );
}
