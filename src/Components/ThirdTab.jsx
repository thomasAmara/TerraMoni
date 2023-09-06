import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import Desola from '../Assets/corporate2.png';

export default function ThirdTab() {
  return (
    <div>
      <Box margin='0 auto' width='100%'>
        <Box
          display='flex'
          flexDirection={['column', 'row']}
          justifyContent='space-between'
          minwidth='700px'
          width='100%'
          px={['40px', '90px']}
          py='35px'
        >
          <Box
            maxWidth='600px'
            alignItems='center'
            display='flex'
            mt='20px'
            py='10px'
          >
            <Text
              alignItems='flex-start'
              textAlign='start'
              fontWeight='500'
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
          <Box>
            <Image src={Desola} width='480px' height='360px' />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
