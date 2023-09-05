import { Box, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Bg from '../Assets/register.png';
import { Stepper } from 'react-form-stepper';
import BusinessDetails from '../Components/BusinessDetails';
import DirectorDetails from '../Components/DirectorDetails';
import Uploads from '../Components/Uploads';

export default function Coporate() {
  const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  const [formData, setForm] = useState({
    step: 1,
    email: '',
    username: '',
    password: '',
    name: '',
    lastName: '',
    phone: '',
    address: '',
  });

  const nextStep = () => {
    setForm((formData) => ({ ...formData, step: formData.step + 1 }));
  };
  console.log(nextStep, 'next');

  const prevStep = () => {
    setForm((formData) => ({ ...formData, step: formData.step - 1 }));
  };

  const props = { formData, setForm };
  return (
    
      <Box
        display='flex'
        flexDirection={{base:'column', md:'row'}}
        // height="100%"
        width='100%'
        maxWidth='1440px'
        // pb='30px'
      >
        <Box
          bgImage={Bg}
          display={{base:'none', md:'block'}}
          p='30px'
          width='40%'
          height="100vh"
          backgroundPosition='100% 100%'
          backgroundSize='cover'
          backgroundRepeat= 'no-repeat'
          // maxWidth='580px'
        ></Box>
        <Box
          // maxWidth='860px'
          width='100%'
          display='flex'
          alignItems='center'
          px='20px'
        >
          <Box width='100%' margin=' 0 auto' maxWidth='600px'>
            <Box>
              <Text
                textTransform='uppercase'
                fontSize='32px'
                fontWeight='600'
                color='#942F8B'
              >
                Sign Up
              </Text>
              <Text color='#545454' fontSize='18px' fontWeight='400'>
                Corporate
              </Text>
            </Box>
            <Stepper
              steps={[
                { label: 'Business Information' },
                { label: 'Directors details' },
                { label: 'Document Upload' },
              ]}
              activeStep={formData.step - 1}
              styleConfig={{
                activeBgColor: '#942F8B',
                activeTextColor: '#fff',
                inactiveBgColor: '#fff',
                inactiveTextColor: '#942F8B',
                completedBgColor: '#fff',
                completedTextColor: '#942F8B',
                size: '3em',
              }}
              className={'stepper'}
              stepClassName={'stepper__step'}
            />
            <Box>
              {(() => {
                switch (formData.step) {
                  case 1:
                    return <BusinessDetails nextStep={nextStep} />;
                  case 2:
                    return <DirectorDetails {...props} />;
                  case 3:
                    return <Uploads {...props} />;

                  default:
                    return null;
                }
              })()}
            </Box>
            <Box
              display='flex'
              justifyContent={formData.step === 1 ? 'end' : 'space-between'}
              mt='5%'
            >
              {formData.step === 1 ? null : (
                <Button
                  width='250px'
                  height='60px'
                  color='#979797'
                  onClick={prevStep}
                >
                  Back
                </Button>
              )}
              {/* {formData.step === 3 ? null : (
                <Button
                  width='250px'
                  height='60px'
                  color='#979797'
                  onClick={prevStep}
                >
                  Next
                </Button>
              )} */}

              <Button
                width='250px'
                height='60px'
                colorScheme='pink'
                onClick={nextStep}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
   
  );
}
