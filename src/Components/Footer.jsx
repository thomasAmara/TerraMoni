import { Box, Button, Image, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Tiktok from '../Assets/tiktokIcon.svg';
import Facebook from '../Assets/facebookIcon.svg';
import Twitter from '../Assets/twitterIcon.svg';
import Instagram from '../Assets/InstagramIcon.svg';
import Linkedin from '../Assets/LinkedInIcon.svg';
import { FaGooglePlay } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <Box
        display='flex'
        width='100%'
        maxWidth='1340px'
        margin='0 auto'
        flexDirection={['column', 'row']}
        justifyContent='space-between'
        p='20px'
        pb='5%'
        // border='2px'
      >
        <Box mt='25px' width={['100%', '35%']}>
          <Box>
            <Text
              textAlign='start'
              color='#545454'
              fontSize='20px'
              fontWeight='600'
            >
              Subscribe to our newsletter
            </Text>
          </Box>
          <Box mt='15px'>
            <Input
              borderRadius='20px'
              placeholder='Enter your e-mail address'
              //   maxWidth='470px'
              p='15px'
              height='46px'
              width='100%'
            />
          </Box>
          <Box mt='10%'>
            <Box display='flex'>
              <Button
                p='10px'
                width='360px'
                height='70px'
                color='#FFF'
                _hover={{ bg: '#C296BE' }}
                bg='#862E7E'
              >
                <FaGooglePlay size={32} />
                <Box display='flex' alignItems='start' flexDirection='column'>
                  Get it on
                  <Text>Google Play</Text>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box mt='25px' width={['100%', '30%']}>
          <Stack spacing='15px'>
            <Box textAlign='start'>
              <Text color='#942F8B' fontSize='20px' fontWeight='600'>
                company
              </Text>
            </Box>
            <Box textAlign='start'>
              <Text color='#7A7A7A' fontSize='16px' fontWeight='400'>
                About Us
              </Text>
            </Box>
            <Box textAlign='start'>
              <Text color='#7A7A7A' fontSize='16px' fontWeight='400'>
                Careers
              </Text>
            </Box>
            <Box textAlign='start'>
              <Text color='#7A7A7A' fontSize='16px' fontWeight='400'>
                Blog
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box
          display='flex'
          width={['100%', '60%']}
          maxWidth='490px'
          mt='25px'
          flexDirection='column'
        >
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
          >
            <Box>
              <Box textAlign='start'>
                <Text color='#942F8B' fontSize='20px' fontWeight='600'>
                  Business
                </Text>
              </Box>
              <Stack spacing='15px'>
                <Box mt='15px' textAlign='start'>
                  <Text color='#7A7A7A' fontSize='16px' fontWeight='400'>
                    Individual Agent Registration
                  </Text>{' '}
                </Box>{' '}
                <Box textAlign='start'>
                  <Text color='#7A7A7A' fontSize='16px' fontWeight='400'>
                    Sole Proprietor Registration
                  </Text>
                </Box>
                <Box textAlign='start'>
                  <Text color='#7A7A7A' fontSize='16px' fontWeight='400'>
                    Corporate Registration
                  </Text>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Box textAlign='start'>
                <Text color='#942F8B' fontSize='20px' fontWeight='600'>
                  Safety
                </Text>
              </Box>
              <Stack spacing='15px'>
                <Box mt='15px' textAlign='start'>
                  <Text color='#7A7A7A' fontSize='16px' fontWeight='400'>
                    Help Center
                  </Text>
                </Box>
                <Box textAlign='start'>
                  <Text color='#7A7A7A' fontSize='16px' fontWeight='400'>
                    Road Map
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Box>
          <Box
            display='flex'
            justifyContent='space-between'
            mt='30px'
            flexDirection='row'
          >
            <Box
              p='15px'
              width='60px'
              height='60px'
              borderRadius='100%'
              boxShadow='0px 0px 5px 0px rgba(0,0,0,0.2)'
              justifyContent='center'
              display='flex'
              cursor='pointer'
            >
              <Image src={Facebook} />
            </Box>
            <Box
              p='15px'
              width='60px'
              height='60px'
              borderRadius='100%'
              boxShadow='0px 0px 5px 0px rgba(0,0,0,0.2)'
              justifyContent='center'
              display='flex'
              cursor='pointer'
            >
              <Image src={Twitter} />
            </Box>
            <Box
              p='15px'
              width='60px'
              height='60px'
              borderRadius='100%'
              boxShadow='0px 0px 5px 0px rgba(0,0,0,0.2)'
              justifyContent='center'
              display='flex'
              cursor='pointer'
            >
              <Image src={Instagram} />
            </Box>
            <Box
              p='15px'
              width='60px'
              height='60px'
              borderRadius='100%'
              boxShadow='0px 0px 5px 0px rgba(0,0,0,0.2)'
              // 0px 0px 5px 0px rgba(0,0,0,0.75)
              justifyContent='center'
              display='flex'
              cursor='pointer'
            >
              <Image src={Linkedin} />
            </Box>
            <Box
              p='15px'
              width='60px'
              height='60px'
              borderRadius='100%'
              boxShadow='0px 0px 5px 0px rgba(0,0,0,0.2)'
              justifyContent='center'
              display='flex'
              cursor='pointer'
            >
              <Image src={Tiktok} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
