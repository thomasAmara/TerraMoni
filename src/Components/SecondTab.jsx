import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function SecondTab() {
  return (
    <div>
      <Box margin='0 auto' width='100%'>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          minwidth='300px'
          width='100%'
          px='90px'
          py='35px'
          border='2px'
        >
          <Box maxWidth='500px' width='100%' border='2px' mt='20px' py='10px'>
            <Text fontWeight='500' textAlign='start' fontSize='14px'>
              The sole proprietor agent, embodied by the-art POS terminal,
              becomes your partner in optimizing operations, delighting
              customers, and driving growth. With its ability to process
              transactions seamlessly, manage inventory efficiently, foster
              personalized interactions, provide actionable insights, and
              prioritize security, the POS terminal is not just a tool – a POS
              terminal not only simplifies transactions but also elevates the
              overall business experience
            </Text>
          </Box>
          <Box mt='20px'>
            Image
            <Image />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
