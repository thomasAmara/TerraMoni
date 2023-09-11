import {
  Box,
  Button,
  Wrap,
  Input,
  SimpleGrid,
  Text,
  Select,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Bg from '../Assets/register.png';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';

export default function AgentRegister() {
  const [activePage, setActivePage] = useState('page1');
  const [isLessThan480] = useMediaQuery('(max-width: 480px)');
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  const handlePage = () => {
    console.log('page 1');
    setActivePage('page1');
  };

  const handlePage2 = () => {
    console.log('page 2');
    setActivePage('page2');
  };
  return (
    <div>
      <Box
        display='flex'
        flexDirection='row'
        margin={isLessThan480 ? ' 0 auto' : null}
        px={isLessThan480 ? '15px' : '0px'}
        height={isLessThan480 ? '100%' : '100vh'}
        width='100%'
        border='2px'
      >
        <Box
          display={isLessThan480 ? 'none' : 'flex'}
          bgImage={Bg}
          p='20px'
          width='100%'
          backgroundPosition='100% 100%'
          backgroundSize='cover'
          maxWidth='580px'
          //   height='100vh'
        ></Box>
        <Box
          // maxWidth='860px'
          minWidth={isLargerThan1280 ? '860px' : '150px'}
          borderColor={isLargerThan1280 ? 'green' : 'red'}
          pb='25px'
          width='100%'
          overflow='scroll'
          px='30px'
        >
          <Box
            width='100%'
            margin='0 auto'
            // border='2px yellow'
            px='10px'
            py='15px'
          >
            <Box>
              <Text
                fontSize='48px'
                textTransform='uppercase'
                fontWeight='700'
                color='#942F8B'
              >
                Sign up
              </Text>
            </Box>

            <Box>
              <Box>
                <Link to='/'>
                  <Text fontSize='24px' fontWeight='600'>
                    Home
                  </Text>
                </Link>
              </Box>
              <SimpleGrid>
                <Text
                  fontSize='18px'
                  textTransform='uppercase'
                  fontWeight='400'
                  color='#545454'
                >
                  Agent Self Registration
                </Text>
              </SimpleGrid>
            </Box>
            <Box
              display='flex'
              mt='20px'
              justifyContent='center'
              flexDirection='row'
            >
              <Box
                display='flex'
                alignItems='center'
                borderLeftRadius='10px'
                maxWidth='230px'
                p='10px'
                border='2px'
                id='page1'
                bg={activePage === 'page1' ? '#942F8B' : '#E7E7E7'}
                color={activePage === 'page1' ? '#FFF' : '#942F8B'}
                onClick={handlePage}
              >
                <Text textAlign='start' fontSize='18px'>
                  Individual Agent
                </Text>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                borderRightRadius='10px'
                maxWidth='260px'
                p='10px'
                border='1px'
                id='page2'
                bg={activePage === 'page2' ? '#942F8B' : '#E7E7E7'}
                color={activePage === 'page2' ? '#FFF' : '#942F8B'}
                onClick={handlePage2}
              >
                <Text textAlign='start' fontSize='18px'>
                  Sole-Proprietor registration
                </Text>
              </Box>
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
                    {/* <Text>Phone Number</Text> */}

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
      </Box>
    </div>
  );
}
