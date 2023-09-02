import { Box, Button, Text, Image } from '@chakra-ui/react';
import React from 'react';
import Pana from '../Assets/pana.svg';
import { FaGooglePlay } from 'react-icons/fa';

export default function HelpSection() {
  return (
    <div>
      <Box display='flex' flexDirection='column'>
        <Box>
          <Text textTransform='capitalize' fontWeight='700' fontSize='32px'>
            Here To Help
          </Text>
        </Box>
        <Box
          display='flex'
          p='20px'
          justifyContent='center'
          flexDirection={['column', 'row']}
        >
          <Box>
            <Image src={Pana} alt='' />
          </Box>
          <Box
            display='flex'
            // flexDirection='column'
            alignItems='center'
            width='50%'
            mt={['4%', '0px']}
          >
            <Box>
              <Box margin='0 auto' py='10px' width='80%' px='30px'>
                <Text textAlign='start' fontWeight='400' fontSize='14px'>
                  You can chat with us on the app, slide into our DMs, tweet,
                  leave an Instagram comment, send an email or call. However you
                  choose to reach out, there’ll always be a friendly person
                  there to make your life easy.
                </Text>
              </Box>
              <Box
                margin='0 auto'
                // px='30px'
                display='flex'
                alignItems='flex-start'
                width='72%'
                py='25px'
              >
                <Button
                  width={['300px', '400px']}
                  height='60px'
                  _hover={{ bg: '#C296BE' }}
                  bg='#862E7E'
                  color='#FFF'
                  variant='solid'
                  borderRadius='8px'

                  //   ml='-12%'
                >
                  <FaGooglePlay size='32px' />
                  <Box display='flex' alignItems='start' flexDirection='column'>
                    Get it on
                    <Text>Google Play</Text>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
