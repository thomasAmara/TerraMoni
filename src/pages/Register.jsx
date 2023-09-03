import { Box, Button, Checkbox, Input, Text } from '@chakra-ui/react';
import React from 'react';
import Bg from '../Assets/register.png';
import { Link } from 'react-router-dom';

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
          height='100vh'
          flexDirection='column'
          alignItems='center'
          justifyContent='center' 
          backgroundPosition='100% 100%'
          backgroundSize='cover'
          maxWidth={['100%', '580px']}
          display={['none', 'flex']}
        >
            <Text
            mb='15px'
            color='#fff'
            fontSize='2rem'
            >Welcome back</Text>
          <Link to="/login"> <Button color='#FFF' variant='outline'>
                Login
              </Button>
              </Link> 
        </Box>
        <Box
          maxWidth={['100%', '80%', '860px']}
          // width='50%'
          display='flex'
          alignItems='center'
          px={['20px', '30px']} 
          backgroundColor='skyblue'
        >
          <Box width='100%' margin={['0 auto', null, '0']} maxWidth={['100%', '600px']}>
            <Text fontSize={['36px', '48px']} fontWeight='700' color='#942F8B' m='0'>Register</Text>
            <Text fontSize={['1.2rem', '1.8rem']} fontWeight='700'>New to TSP</Text>
            <Text fontSize={['14px', '16px']} >Enter your details to get started</Text>
            <Box>
              <Input mt='20px' placeholder='Email' />
              <Input mt='20px' placeholder='Phone Number' />
              <Input mt='20px' type='password' placeholder='Password' />
            </Box>
            <Box 
            mt='15px' 
            width='85%'
            display='flex'
              // alignItems='center'
              >
            <Checkbox />
              <Text marginLeft='10px'
                fontSize='12px'
                textAlign='left'
                >
    I agree to the <span style={{ color: '#942F8B', cursor: 'pointer'}}>terms and conditions</span> and <span style={{ color: '#942F8B', cursor: 'pointer'}}>privacy policy</span> of TerraMoni
  </Text>
</Box>
            <Box mt={['20px', '25px']}>
              <Button width='100%' colorScheme='pink'>Sign Up</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
