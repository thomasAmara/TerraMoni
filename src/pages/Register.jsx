import { Box, Button, Checkbox, Input, Text } from '@chakra-ui/react';
import React from 'react';
import Bg from '../Assets/register.png';

export default function Register() {
  return (
    <div>
      <Box
        display='flex'
        flexDirection='row'
        height='100vh'
        width='100%'
        maxWidth='1440px'
      >
        <Box
          bgImage={Bg}
          p='20px'
          width='100%'
          backgroundPosition='100% 100%'
          backgroundSize='cover'
          maxWidth='580px'
        ></Box>
        <Box
          maxWidth='860px'
          width='100%'
          display='flex'
          alignItems='center'
          px='30px'
        >
          <Box width='100%' margin='0 auto' maxWidth='600px'>
            <Text fontSize='48px' fontWeight='700' color='#942F8B'>
              Sign In
            </Text>
            <Box>
              <Input mt='20px' placeholder='email' />
              <Input mt='20px' placeholder='phone Number' />
              <Input mt='20px' placeholder='password' />
            </Box>
            <Box
              mt='15px'
              width='85%'
              display='flex'
              justifyContent='space-between'
            >
              <Checkbox />
              <Text>
                I agree to the term and conditions and privacy policy of
                TerraMoni
              </Text>
            </Box>
            <Box mt='25px'>
              <Button width='100%' colorScheme='pink'>
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
