import {
  Box,
  Button,
  Wrap,
  Input,
  SimpleGrid,
  Text,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import Bg from '../Assets/register.png';

export default function AgentRegister() {
  return (
    <div>
      <Box
        display='flex'
        flexDirection='row'
        height='100vh'
        width='100%'
        maxWidth='1440px'
        border='2px'
      >
        <Box
          bgImage={Bg}
          p='20px'
          width='100%'
          backgroundPosition='100% 100%'
          backgroundSize='cover'
          maxWidth='580px'
          //   height='100vh'
          border='2px'
        ></Box>
        <Box
          maxWidth='860px'
          pb='25px'
          width='100%'
          overflow='scroll'
          px='30px'
        >
          <Box width='100%' margin='0 auto' maxWidth='600px'>
            <Box>
              <Text fontSize='48px' fontWeight='700' color='#942F8B'>
                Sign In
              </Text>
            </Box>

            <Box>
              <SimpleGrid>PERSONAL</SimpleGrid>
            </Box>
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
                    <Text color='#942F8B'>Last Name</Text>
                    <Input name='lastName' />
                  </Wrap>
                </Box>
              </SimpleGrid>
              <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
                <Box>
                  <Wrap>
                    <Text color='#942F8B'>Phone Number</Text>
                    <Input name='firstName' />
                  </Wrap>
                </Box>
                <Box>
                  <Wrap>
                    <Text color='#942F8B'>Email Address</Text>
                    <Input name='lastName' />
                  </Wrap>
                </Box>
              </SimpleGrid>
              <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
                <Box>
                  <Wrap>
                    <Text color='#942F8B'>Phone Number</Text>
                    <Input name='firstName' />
                  </Wrap>
                </Box>
                <Box>
                  <Wrap>
                    <Text color='#942F8B'>Date of Birth</Text>
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
              {/* <SimpleGrid>DOCUMENT</SimpleGrid> */}
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
                    <Text color='#942F8B'>First Name</Text>
                    <Input name='firstName' />
                  </Wrap>
                </Box>
                <Box>
                  <Wrap>
                    <Text color='#942F8B'>Last Name</Text>
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
                    <Text color='#942F8B'>First Name</Text>
                    <Input name='firstName' />
                  </Wrap>
                </Box>
                <Box>
                  <Wrap>
                    <Text color='#942F8B'>Last Name</Text>
                    <Input name='lastName' />
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
                    <Text color='#942F8B'>First Name</Text>
                    <Input name='firstName' />
                  </Wrap>
                </Box>
                <Box>
                  <Wrap>
                    <Text color='#942F8B'>Last Name</Text>
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
                    <Text color='#942F8B'>Bank Name</Text>
                    <Input name='firstName' />
                  </Wrap>
                </Box>
                <Box>
                  <Wrap>
                    <Text color='#942F8B'>Account Number</Text>
                    <Input name='lastName' />
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
              <Button width='100%' colorScheme='pink'>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
