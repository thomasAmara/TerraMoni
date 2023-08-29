import React, { useCallback } from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import Logo from '../Assets/tspLogo.svg';
import Terra from '../Assets/Terrabg.svg';
import HomeImage from '../Assets/homeImage.svg';
import { useNavigate } from 'react-router-dom';
import Card from '../Assets/cardFrame.png';
import Footer from '../Components/Footer';
import { BsBriefcaseFill } from 'react-icons/bs';

import { IoIosPerson } from 'react-icons/io';

export default function Home() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate('/login', { replace: true }),
    [navigate]
  );
  const handleCoporate = useCallback(
    () => navigate('/coporate', { replace: true }),
    [navigate]
  );
  return (
    <div>
      <Box maxWidth='1440px' width='100%'>
        <Box bg='#942F8B'>
          <Box
            display='flex'
            px='20px'
            justifyContent='space-between'
            flexDirection='row'
            py='15px'
            maxWidth='1340px'
            margin='0 auto'
          >
            <Box>
              <Image src={Logo} />
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              flexDirection='row'
              color='#FFF'
              textAlign='center'
              width='30%'
              // border='2px'
              alignItems='center'
            >
              <Text fontSize='16px' cursor='pointer' fontWeight='500'>
                Home
              </Text>
              <Text fontSize='16px' cursor='pointer' fontWeight='500'>
                Agent
              </Text>
              <Text fontSize='16px' cursor='pointer' fontWeight='500'>
                FAQ
              </Text>
            </Box>
            <Box display='flex' alignItems='center'>
              <Button
                width='100%'
                minWidth='200px'
                height='50px'
                color='#942F8B'
                onClick={handleOnClick}
              >
                Sign in
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          backgroundImage={HomeImage}
          backgroundSize='cover'
          backgroundRepeat='no-repeat'
          backgroundPosition='32% 43%'
          height='945px'
          width='100%'
          pt='7%'
        >
          <Box
            width='100%'
            maxWidth='1340px'
            display='flex'
            alignItems='center'
            margin='0 auto'
            pt='40px'
          >
            <Box
              maxWidth='630px'
              display='flex'
              flexDirection='column'
              justifyContent='flex-start'
            >
              <Box>
                <Text textAlign='start' fontSize='48px' fontWeight='700'>
                  Welcome to TerraMoni
                </Text>
              </Box>
              <Box mt='5%'>
                <Text textAlign='start' fontSize='24px' fontWeight='500'>
                  The Preferred One-Stop-Shop for Agency Banking Solutions.
                </Text>
              </Box>

              <Box mt='5%' display='flex'>
                <Button width='350px' height='70px' colorScheme='pink'>
                  Sign up as an Agent
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box maxWidth='1340px' margin='0 auto'>
          <Box>
            <Text fontSize='32px' fontWeight='600' color='#000000'>
              Register As An Agent
            </Text>
          </Box>
          <Box display='flex' p='20px' justifyContent='space-between'>
            <Box
              minWidth='500px'
              height='300px'
              backgroundImage={Card}
              backgroundSize='cover'
              p='20px'
            >
              <Text fontSize='24px' fontWeight='600' color='#2C2E2F'>
                Individual Agent/Sole-Proprietor Registration
              </Text>
              <Box display='flex' justifyContent='center'>
                <IoIosPerson size='128' />;
              </Box>
              <Button colorScheme='pink' variant='outline'>
                Register
              </Button>
            </Box>
            <Box
              minWidth='500px'
              backgroundImage={Card}
              height='300px'
              p='20px'
            >
              <Text fontSize='24px' fontWeight='600' color='#2C2E2F'>
                Corporate Registration
              </Text>
              <Box display='flex' justifyContent='center'>
                <BsBriefcaseFill size='128' />;
              </Box>
              <Button
                onClick={handleCoporate}
                colorScheme='pink'
                variant='outline'
              >
                Register
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          mt='40px'
          backgroundImage={Terra}
          backgroundSize='100%'
          backgroundPosition='100%'
          height='660px'
        ></Box>
        {/* <Box>FOOTER</Box> */}
        <Footer />
      </Box>
    </div>
  );
}
