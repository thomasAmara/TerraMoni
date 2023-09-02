import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
  Stack,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import POS from '../Assets/Terrabg.png';
import { act } from 'react-dom/test-utils';

export default function FaqSection() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  return (
    <div>
      <Box margin='0 auto' width='90%' px='30px' py='25px'>
        <Box display='flex' flexDirection='column' mt='4%'>
          <Box color='#152329'>
            <Text fontWeight='700' textAlign='start' fontSize='32px'>
              Frequently Ask
            </Text>
          </Box>

          <Box color='#943F8B'>
            <Text
              fontWeight='700'
              textAlign='start'
              fontSize='32px'
              color='##942F8B'
            >
              Questions
            </Text>
          </Box>
        </Box>

        <Box
          display='flex'
          flexDirection={['column-reverse', 'row']}
          alignItems='center'
          justifyContent='space-between'
        >
          <Box border='3px' width='1%'></Box>
          <Box width={['100%', '50%']} px='15px'>
            <Stack spacing='55px'>
              <Box>
                <Box
                  display='flex'
                  alignItems='center'
                  borderRadius='5px'
                  flexDirection='row'
                  justifyContent='space-between'
                  bg='#DEC0DC'
                  pl='10px'
                  py='2px'
                >
                  <Text fontSize='24px' fontWeight='600' color='#152329'>
                    Q1 What is a Terminal
                  </Text>
                  <Button bg='#942F8B' onClick={() => setActive(!active)}>
                    {active === true ? (
                      <BiMinus color='#FFF' fontSize='32px' />
                    ) : (
                      <BiPlus color='#FFF' fontSize='32px' />
                    )}
                  </Button>
                </Box>
                {active === true ? (
                  <Box px='10px'>
                    <Text textAlign='start'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </Box>
                ) : null}
              </Box>
              <Box>
                <Box
                  display='flex'
                  alignItems='center'
                  borderRadius='5px'
                  flexDirection='row'
                  justifyContent='space-between'
                  bg='#DEC0DC'
                  pl='10px'
                >
                  <Text fontSize='24px' fontWeight='600' color='#152329'>
                    Q2 How can I request for a POS
                  </Text>
                  <Button bg='#942F8B' onClick={() => setActive1(!active1)}>
                    {active1 === true ? (
                      <BiMinus color='#FFF' fontSize='32px' />
                    ) : (
                      <BiPlus color='#FFF' fontSize='32px' />
                    )}
                  </Button>
                </Box>
                {active1 === true ? (
                  <Box px='10px'>
                    <Text textAlign='start'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </Box>
                ) : null}
              </Box>
              <Box>
                <Box
                  display='flex'
                  alignItems='center'
                  borderRadius='5px'
                  flexDirection='row'
                  justifyContent='space-between'
                  bg='#DEC0DC'
                  pl='10px'
                >
                  <Text fontSize='24px' fontWeight='600' color='#152329'>
                    Q3 What is a Terminal
                  </Text>
                  <Button bg='#942F8B' onClick={() => setActive2(!active2)}>
                    {active2 === true ? (
                      <BiMinus color='#FFF' fontSize='32px' />
                    ) : (
                      <BiPlus color='#FFF' fontSize='32px' />
                    )}
                  </Button>
                </Box>
                {active2 === true ? (
                  <Box px='10px'>
                    <Text textAlign='start'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </Box>
                ) : null}
              </Box>
              <Box>
                <Box
                  display='flex'
                  alignItems='center'
                  borderRadius='5px'
                  flexDirection='row'
                  justifyContent='space-between'
                  bg='#DEC0DC'
                  pl='10px'
                >
                  <Text fontSize='24px' fontWeight='600' color='#152329'>
                    Q4 Is Terra Moni Licensed
                  </Text>
                  <Button bg='#942F8B' onClick={() => setActive3(!active3)}>
                    {active3 === true ? (
                      <BiMinus color='#FFF' fontSize='32px' />
                    ) : (
                      <BiPlus color='#FFF' fontSize='32px' />
                    )}
                  </Button>
                </Box>
                {active3 === true ? (
                  <Box px='10px'>
                    <Text textAlign='start'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </Box>
                ) : null}
              </Box>
              <Box>
                <Box
                  display='flex'
                  alignItems='center'
                  borderRadius='5px'
                  flexDirection='row'
                  justifyContent='space-between'
                  bg='#DEC0DC'
                  pl='10px'
                >
                  <Text fontSize='24px' fontWeight='600' color='#152329'>
                    Q5 How much does a POS Terminal cost
                  </Text>
                  <Button bg='#942F8B' onClick={() => setActive4(!active4)}>
                    {active4 === true ? (
                      <BiMinus color='#FFF' fontSize='32px' />
                    ) : (
                      <BiPlus color='#FFF' fontSize='32px' />
                    )}
                  </Button>
                </Box>
                {active4 === true ? (
                  <Box px='10px'>
                    <Text textAlign='start'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </Box>
                ) : null}
              </Box>
            </Stack>
          </Box>
          <Box width={['100%', '50%']}>
            <Image
              width={['320px', '620px']}
              height={['240px', '420px']}
              src={POS}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
