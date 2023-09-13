import {
  Box,
  Text,
  SimpleGrid,
  Wrap,
  Input,
  Select,
  Button,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomInput from './CustomInput';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { States } from './StateArray';

export default function IndividualAgent() {
  const [loader, setLoader] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const phoneRegExp = /^([0](7|8|9){1})(0|1){1}[0-9]{8}$/;

  const validateForm = Yup.object().shape({
    first_Name: Yup.string().min(4, 'Too Short!').required('Required'),
    last_Name: Yup.string().min(4, 'Too Short!').required('Required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Enter a Valid Nigeria Phone number')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    passportImage: Yup.mixed()
      //   .test({
      //     message: 'Please provide a supported file type',
      //     test: (file, context) => {
      //       const isValid = ['png', 'pdf', 'jpeg'].includes(
      //         getExtension(file?.name)
      //       );
      //       if (!isValid) context?.createError();
      //       return isValid;
      //     },
      //   })
      .test({
        message: `File is too big, can't exceed ${2} Mb`,
        test: (file) => {
          const isValid = file?.size < 2000;
          return isValid;
        },
      }),
  });

  const Url = 'https://portal.datacraftgarage.com/api/RegisterAgents';

  const getSubmit = async (values) => {
    console.log('my data', values);
    setLoader(true);
    try {
      const response = await axios.post(Url, values, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 201) {
        return navigate('/successMsg', { replace: true });
      } else {
        toast({
          position: 'top-right',
          title: 'Success',
          description: response.data.message,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        setLoader(false);
      }
      setLoader(false);
    } catch {
      toast({
        position: 'top-right',
        title: 'Error.',
        // description: error.response.data.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setLoader(false);
    }

    // setFormErrors(validate(formValues));
    // setIsSubmitting(true);
  };

  return (
    <div>
      <Box>
        <Box>
          <Formik
            initialValues={{
              first_name: '',
              mid_name: '',
              last_name: '',
              dob: '',
              phone: '',
              email: '',
              gender: 'male',
              agent_type: 1,
              agent_role: 'agent',
              location: '',
              passport: '',
              country: '',
              BVN: '',
              registration_date: '',
              tax_id: '',
              doc_no: '',
              doc_type: 'NIN',
              docimage: '',
              doc_issue_date: '',
              doc_exp_date: '',
              bank_name: '',
              bank_acc_no: '',
            }}
            validationSchema={validateForm}
            onSubmit={getSubmit}
          >
            {({ values, errors, isSubmitting, handleChange }) => (
              <Form>
                <Box
                  mt='15px'
                  width='100%'
                  display='flex'
                  flexDirection='column'
                  justifyContent='space-between'
                >
                  <Text textAlign='start' color='#545454' fontSize='18px'>
                    Personal Details
                  </Text>

                  <SimpleGrid
                    column={2}
                    minChildWidth='120px'
                    width='100%'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>First Name</Text>
                        <CustomInput name='first_name' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Middle Name</Text>
                        <CustomInput name='middle_name' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Last Name</Text>
                        <CustomInput name='last_name' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Date of Birth</Text>
                        {/* <DatePicker /> */}
                        <CustomInput name='dob' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid minChildWidth='148px' width='100%' spacing='15px'>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Phone Number</Text>
                        <CustomInput name='phone' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Email Address</Text>
                        <CustomInput name='email' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid
                    mt='15px'
                    minChildWidth='148px'
                    width='100%'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Gender</Text>
                        <Select
                          name='gender'
                          onChange={handleChange}
                          value={values.gender}
                        >
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                        </Select>
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Location/City</Text>
                        <CustomInput name='location' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid
                    mt='15px'
                    minChildWidth='148px'
                    width='100%'
                    spacing='15px'
                  >
                    <Box>
                      {' '}
                      <Wrap>
                        <Wrap>
                          <Text color='#942F8B'>Local Government Area</Text>
                          <CustomInput name='lga' />
                        </Wrap>
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>State</Text>
                        <Select
                          name='state'
                          onChange={handleChange}
                          value={values.state}
                        >
                          <>
                            {States?.map((data) => (
                              <option key={data.id} value={data.name}>
                                {data.name}
                              </option>
                            ))}
                          </>
                        </Select>
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Country</Text>
                        <Select
                          name='country'
                          onChange={handleChange}
                          value={values.country}
                        >
                          <option>Country</option>
                          <option value='Nigeria'>Nigeria</option>
                          <option value='Kenya'>Kenya</option>
                        </Select>
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                </Box>
                <Box mt='25px'>
                  <Text textAlign='start' color='#545454' fontSize='18px'>
                    Documents
                  </Text>
                  <SimpleGrid
                    column={2}
                    minChildWidth='120px'
                    width='100%'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Passport Photo</Text>
                        <CustomInput name='passport' p='3px' type='file' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Prof of Address</Text>
                        <CustomInput name='address_proff' p='3px' type='file' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid
                    mt='15px'
                    minChildWidth='148px'
                    width='100%'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>ID Type</Text>
                        <Select
                          name='doc_type'
                          onChange={handleChange}
                          value={values.doc_type}
                        >
                          <option value='passport'>Passport</option>
                          <option value='license'>Drivers License</option>
                          <option value='nin'>NIN</option>
                          <option value='pvt'>PVT</option>
                        </Select>
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Document Number</Text>
                        <CustomInput name='doc_no' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Document Image</Text>
                        <CustomInput name='docimage' p='3px' type='file' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid
                    mt='15px'
                    column={2}
                    minChildWidth='120px'
                    width='100%'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Document Issue Date</Text>
                        {/* <DatePicker /> */}
                        <CustomInput name='doc_exp_date' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Document Expiry Date</Text>
                        <DatePicker />
                        <CustomInput name='doc_issue_date' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                </Box>
                <Box mt='25px'>
                  <Text textAlign='start' color='#545454' fontSize='18px'>
                    Banking Details
                  </Text>
                  <SimpleGrid
                    column={2}
                    minChildWidth='120px'
                    width='100%'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Bank Name</Text>
                        <CustomInput name='bank_name' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Bank Account Number</Text>
                        <CustomInput name='bank_acc_no' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid
                    column={2}
                    minChildWidth='120px'
                    width='100%'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>BVN</Text>
                        <CustomInput name='BVN' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>TAX ID</Text>
                        <CustomInput name='tax_id' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                </Box>
                <Box mt='25px'>
                  <Text textAlign='start' color='#545454' fontSize='18px'>
                    Business
                  </Text>
                  <SimpleGrid
                    column={2}
                    minChildWidth='120px'
                    width='100%'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Registered Business Name</Text>
                        <CustomInput name='Registered Business Name' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Agent Code </Text>
                        <CustomInput name='agentCode' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid
                    mt='15px'
                    minChildWidth='148px'
                    width='100%'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Registration Date</Text>
                        <CustomInput name='registration_date' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Business Address</Text>
                        <CustomInput name='biz_address' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                </Box>
                <Box mt='15px'>
                  <Button
                    _hover={{ bg: '#C296BE' }}
                    bg='#862E7E'
                    maxWidth='600px'
                    height='70px'
                    width='100%'
                    p='10px'
                    borderRadius='10px'
                    color='#FFF'
                    isLoading={loader}
                    // isDisabled={
                    //   Array.isArray(errors) ||
                    //   Object.values(errors).toString() !== ''
                    // }
                    onClick={() => getSubmit(values)}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </div>
  );
}
