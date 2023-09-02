import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Desola from '../Assets/dev.jpg';

export default function FirstTab() {
  return (
    <div>
      <Box margin='0 auto' width='100%'>
        <Box
          display='flex'
          flexDirection={['column', 'row']}
          justifyContent='space-between'
          minwidth='700px'
          width='100%'
          px='90px'
          py='35px'
        >
          <Box
            display='flex'
            maxWidth='600px'
            width='100%'
            alignItems='center'
            mt='20px'
            px='20px'
            py='10px'
          >
            <Text
              fontWeight='500'
              alignItems='flex-start'
              textAlign='start'
              fontSize='14px'
            >
              As an individual POS terminal agent you stand as a testament to
              the power of combining technology and business operations. By
              streamlining processes, enhancing customer interactions, and
              leveraging data-driven insights, businesses can achieve higher
              levels of customer satisfaction, operational efficiency, and
              overall success.
            </Text>
          </Box>
          <Box mt='20px'>
            <Image src={Desola} width='480px' height='360px' />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
