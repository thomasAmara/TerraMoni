import {
  Box,
  Text,
  SimpleGrid,
  Wrap,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';
import React from 'react';

export default function IndividualAgent() {
  return (
    <div>
      <Box>
        <Text fontSize='24px'>Individual</Text>
        <Box>
          <Box
            mt='15px'
            width='100%'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
          >
            <Text textAlign='start' color='#545454' fontSize='18px'>
              Personal Details
            </Text>

            <SimpleGrid
              column={2}
              minChildWidth='120px'
              width='100%'
              spacing='15px'
            >
              <Box>
                <Wrap>
                  <Text color='#942F8B'>First Name</Text>
                  <Input name='firstName' />
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Middle Name</Text>
                  <Input name='middleName' />
                </Wrap>
              </Box>
            </SimpleGrid>
            <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Last Name</Text>
                  <Input name='lastName' />
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Date of Birth</Text>
                  <Input name='DOB' />
                </Wrap>
              </Box>
            </SimpleGrid>
            <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Phone Number</Text>
                  <Input name='phoneNumber' />
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Email Address</Text>
                  <Input name='email' />
                </Wrap>
              </Box>
            </SimpleGrid>
            <SimpleGrid
              mt='15px'
              minChildWidth='148px'
              width='100%'
              spacing='15px'
            >
              <Box>
                <Wrap>
                  {/* <Text>Phone Number</Text> */}

                  <Select>
                    <option>Residential</option>
                  </Select>
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Select>
                    <option>State</option>
                  </Select>
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Select>
                    <option>LGA</option>
                  </Select>
                </Wrap>
              </Box>
            </SimpleGrid>
          </Box>
          <Box mt='25px'>
            <Text textAlign='start' color='#545454' fontSize='18px'>
              Documents
            </Text>
            <SimpleGrid
              column={2}
              minChildWidth='120px'
              width='100%'
              spacing='15px'
            >
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Passport Photo</Text>
                  <Input name='firstName' />
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Prof of Address</Text>
                  <Input name='lastName' />
                </Wrap>
              </Box>
            </SimpleGrid>
            <SimpleGrid
              mt='15px'
              minChildWidth='148px'
              width='100%'
              spacing='15px'
            >
              <Box>
                <Wrap>
                  <Select>
                    <option>ID Type</option>
                  </Select>
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Select>
                    <option>ID Number</option>
                  </Select>
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Select>
                    <option>ID Document</option>
                  </Select>
                </Wrap>
              </Box>
            </SimpleGrid>
          </Box>
          <Box mt='25px'>
            <Text textAlign='start' color='#545454' fontSize='18px'>
              Banking Details
            </Text>
            <SimpleGrid
              column={2}
              minChildWidth='120px'
              width='100%'
              spacing='15px'
            >
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Bank Name</Text>
                  <Input name='bankName' />
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Bank Account Number</Text>
                  <Input name='bankAccountNumber' />
                </Wrap>
              </Box>
            </SimpleGrid>
            <SimpleGrid
              column={2}
              minChildWidth='120px'
              width='100%'
              spacing='15px'
            >
              <Box>
                <Wrap>
                  <Text color='#942F8B'>BVN</Text>
                  <Input name='firstName' />
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Text color='#942F8B'>TAX ID</Text>
                  <Input name='lastName' />
                </Wrap>
              </Box>
            </SimpleGrid>
          </Box>
          <Box mt='25px'>
            <Text textAlign='start' color='#545454' fontSize='18px'>
              Business
            </Text>
            <SimpleGrid
              column={2}
              minChildWidth='120px'
              width='100%'
              spacing='15px'
            >
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Registered Business Name</Text>
                  <Input name='Registered Business Name' />
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Text color='#942F8B'>Agent Code </Text>
                  <Input name='agentCode' />
                  <Text fontSize='10px' fontWeight='400' color='#942F8B'>
                    This is the Bank Account from which you will always fund
                    your Wallet/Virtual Account.
                  </Text>
                </Wrap>
              </Box>
            </SimpleGrid>
            <SimpleGrid
              mt='15px'
              minChildWidth='148px'
              width='100%'
              spacing='15px'
            >
              <Box>
                <Wrap>
                  <Text color='#942F8B'>BVN</Text>
                  <Input name='firstName' />
                </Wrap>
              </Box>
              <Box>
                <Wrap>
                  <Text color='#942F8B'>TAX ID</Text>
                  <Input name='lastName' />
                </Wrap>
              </Box>
            </SimpleGrid>
            <SimpleGrid></SimpleGrid>
          </Box>
          <Box mt='15px'>
            <Button
              _hover={{ bg: '#C296BE' }}
              bg='#862E7E'
              maxWidth='600px'
              height='70px'
              width='100%'
              p='10px'
              borderRadius='10px'
              color='#FFF'
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
