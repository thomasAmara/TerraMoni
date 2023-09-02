import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import AgentSection from './FirstTab';
import PriopritySection from './SecondTab';
import CoporateSection from './ThirdTab';

export default function Agent() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTab1 = () => {
    console.log('tab1');
    setActiveTab('tab1');
  };

  const handleTab2 = () => {
    console.log('tab2');
    setActiveTab('tab2');
  };
  const handleTab3 = () => {
    console.log('tab3');
    setActiveTab('tab3');
  };

  return (
    <div>
      <Box>
        <Box px='25px' py='30px'>
          <Text fontSize='32px' fontWeight='700'>
            AGENTS
          </Text>
          <Box
            display='flex'
            flexDirection='row'
            py='20px'
            margin='0 auto'
            width='100%'
            maxWidth='700px'
            justifyContent='space-around'
          >
            <Box
              p='20px'
              cursor='pointer'
              borderRadius='5px'
              minWidth='200px'
              id='tab1'
              bg={activeTab === 'tab1' ? '#942F8B' : '#E7E7E7'}
              color={activeTab === 'tab1' ? '#FFF' : '#8E8A8a'}
              onClick={handleTab1}
            >
              <Text fontSize='18px' fontWeight='500'>
                Individual Agent
              </Text>
            </Box>
            <Box
              p='20px'
              cursor='pointer'
              borderRadius='5px'
              id='tab2'
              onClick={handleTab2}
              bg={activeTab === 'tab2' ? '#942F8B' : '#E7E7E7'}
              color={activeTab === 'tab2' ? '#FFF' : '#8E8A8a'}
            >
              <Text fontSize='18px' fontWeight='500'>
                Sole-Proprietor Registration
              </Text>
            </Box>
            <Box
              p='20px'
              minWidth='200px'
              cursor='pointer'
              borderRadius='5px'
              id='tab3'
              onClick={handleTab3}
              bg={activeTab === 'tab3' ? '#942F8B' : '#E7E7E7'}
              color={activeTab === 'tab3' ? '#FFF' : '#8E8A8a'}
            >
              <Text fontSize='18px' fontWeight='500'>
                Coporate
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          {activeTab === 'tab1' ? (
            <AgentSection />
          ) : activeTab === 'tab2' ? (
            <PriopritySection />
          ) : activeTab === 'tab3' ? (
            <CoporateSection />
          ) : (
            ''
          )}
          {/* <AgentSection /> */}
          {/* <Box></Box>
          <Box></Box> */}
        </Box>
      </Box>
    </div>
  );
}
