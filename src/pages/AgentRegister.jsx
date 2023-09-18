import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Bg from '../Assets/register.png';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';
import IndividualAgent from '../Components/IndividualAgent';
import Proprietor from '../Components/Proprietor';
import { FcHome } from 'react-icons/fc';

export default function AgentRegister() {
  const [activePage, setActivePage] = useState('page1');
  const [isLessThan480] = useMediaQuery('(max-width: 480px)');
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  const handlePage = () => {
    setActivePage('page1');
  };

  const handlePage2 = () => {
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
              <Box display='flex' justifyContent='center'>
                <Link to='/'>
                  <FcHome size={42} />
                  {/* <Text fontSize='24px' fontWeight='600'>
                    Home
                  </Text> */}
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
            <Box className='tab'>
              {activePage === 'page1' ? (
                <IndividualAgent />
              ) : activePage === 'page2' ? (
                <Proprietor />
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
