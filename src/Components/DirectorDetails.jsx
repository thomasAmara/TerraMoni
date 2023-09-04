import { Box, SimpleGrid, Wrap, Input, Text } from '@chakra-ui/react';
import React from 'react';

export default function DirectorDetails() {
  return (
    <div>
      <Box>
      <Text style={{
        textAlign: 'left',
        fontSize: '14px',
        marginBottom: '8px'
      }}
      >Please enter your information and proceed to next step so we can build your account (For all directors with 5% or more shareholding)
      </Text>
        <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'
        //  flexWrap={['wrap', 'wrap']}
        //  backgroundColor='beige'
        >
          <Box>
            <Wrap>
              <Text color='#942F8B'>First Name</Text>
              <Input name='firstName'
                border='none'
                backgroundColor='#e3e3e385'
                placeholder='Input name as appeared on your ID'
                _placeholder={{
                  fontSize:'12px'
                }}
              />
              
            {/* <span style={{color: 'red', textAlign: 'center'}}>*</span> */}
            {/* In case there are some input field to be marked required */}
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Middle Name</Text>
              <Input name='lastName'
                border='none' 
                backgroundColor='#e3e3e385'
                placeholder='Input name as appeared on your ID'
                _placeholder={{
                  fontSize:'12px'
                }}
              />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Certificate</Text>
              <Input name='firstName' 
              border='none'
              backgroundColor='#e3e3e385'
              />
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>BVN Number</Text>
              <Input name='lastName' 
              border='none'
              backgroundColor='#e3e3e385'
              />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Email </Text>
              <Input name='firstName' 
              border='none'
              backgroundColor='#e3e3e385'
              required/>
            </Wrap>
          </Box>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Business Phone Number</Text>
              <Input name='lastName' 
              border='none'
              backgroundColor='#e3e3e385'
              
              />
            </Wrap>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth='120px' spacing='10px' width='100%'>
          <Box>
            <Wrap>
              <Text color='#942F8B'>Phone Number</Text>
              <Input name='lastName' type='tel' 
              border='none'
              backgroundColor='#e3e3e385'
              />
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
        <SimpleGrid minChildWidth='120px' width='100%' spacing='10px'>
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
    </div>
  );
}
