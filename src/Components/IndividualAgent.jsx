import {
  Box,
  Text,
  SimpleGrid,
  Wrap,
  Select,
  Button,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomInput from './CustomInput';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerField from './DatePicker';
import moment from 'moment';
import { States } from './StateArray';
import '../style.css/Picker.css';

export default function IndividualAgent() {
  const [loader, setLoader] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const phoneRegExp = /^([0](7|8|9){1})(0|1){1}[0-9]{8}$/;

  const validateForm = Yup.object().shape({
    first_name: Yup.string().min(4, 'Too Short!').required('Required'),
    last_name: Yup.string().min(4, 'Too Short!').required('Required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Enter a Valid Nigeria Phone number')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    gender: Yup.string().required(),
    dob: Yup.date()
      .required('Date of birth is required')
      .test('age', 'You must be at least 18 years old', (value) => {
        const minAgeDate = new Date();
        minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
        return value <= minAgeDate;
      }),
    passport: Yup.mixed()
      .test(
        'fileType',
        'Invalid file type. Please select an image (JPEG or PNG).',
        (value) => {
          if (!value) return true; // Allow empty file uploads
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
        }
      )
      .test('fileSize', 'File is too big, must be less than 3 MB', (value) => {
        if (!value) return true; // Field is not required, so allow empty values
        return value.size <= 2 * 1024 * 1024; // 3 MB in bytes
      })
      .required('Please upload a passport photo'),
    address_proff: Yup.mixed()
      .test(
        'fileType',
        'Invalid file type. Please select an image (JPEG, JPG or PNG).',
        (value) => {
          if (!value) return true; // Allow empty file uploads
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
        }
      )
      .test('fileSize', 'File is too big, must be less than 3 MB', (value) => {
        if (!value) return true;
        return value.size <= 2 * 1024 * 1024; // 2 MB in bytes
      })
      .required('address required'),
    BVN: Yup.string().required('BVN Required'),
    doc_issue_date: Yup.string().required(),
    doc_exp_date: Yup.string().required('Required'),
    bank_name: Yup.string().required('Required'),
    bank_acc_no: Yup.string().required('Required'),
    lga: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    tax_id: Yup.string().required('Tax ID Required'),
    doc_no: Yup.string().required('Required'),
    doc_type: Yup.string().required('Select a valid Document type'),
    agentCode: Yup.string().required('Agent code is required'),
    docimage: Yup.mixed()
      .test(
        'fileType',
        'Invalid file type. Please select an image (JPEG or PNG).',
        (value) => {
          if (!value) return true; // Allow empty file uploads
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
        }
      )
      .test('fileSize', 'File is too big, must be less than 3 MB', (value) => {
        if (!value) return true; // Field is not required, so allow empty values
        return value.size <= 2 * 1024 * 1024; // 3 MB in bytes
      })
      .required('Please upload a passport photo'),
  });

  const Url = 'https://portal.datacraftgarage.com/api/RegisterAgents';

  const getSubmit = async (values) => {
    console.log('my data', values, error);
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
        description: error.response.data.message || 'An error occured',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setLoader(false);
    }
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
              dob: moment(new Date()).format('YYYY-MM-DD'),
              phone: '',
              email: '',
              gender: '',
              agent_type: 1,
              agent_role: 'agent',
              lga: '',
              location: '',
              address_proff: null,
              passport: null,
              country: '',
              BVN: '',
              registration_date: '',
              tax_id: '',
              doc_no: '',
              doc_type: '',
              docimage: null,
              doc_issue_date: moment(new Date()).format('YYYY-MM-DD'),
              doc_exp_date: moment(new Date()).format('YYYY-MM-DD'),
              bank_name: '',
              bank_acc_no: '',
              agentCode: '',
            }}
            validationSchema={validateForm}
            onSubmit={getSubmit}
          >
            {({
              values,
              errors,
              isSubmitting,
              handleChange,
              setFieldValue,
            }) => (
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
                        <ErrorMessage
                          name='first_name'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Middle Name</Text>
                        <CustomInput name='mid_name' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid
                    minChildWidth='148px'
                    width='100%'
                    mt='10px'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Last Name</Text>
                        <CustomInput name='last_name' />
                        <ErrorMessage
                          name='last_name'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Date of Birth</Text>
                        <DatePickerField
                          name='dob'
                          format='YYYY-MM-DD'
                          // value={
                          //   moment(values.dob).format('YYYY-MM-DD') ||
                          //   moment(new Date().format('YYYY-MM-DD'))
                          // }
                          // value={values.dob}
                          showYearDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={50}
                        />
                        <ErrorMessage
                          name='dob'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid
                    minChildWidth='148px'
                    width='100%'
                    mt='10px'
                    spacing='15px'
                  >
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Phone Number</Text>
                        <CustomInput name='phone' />
                        <ErrorMessage
                          name='phone'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Email Address</Text>
                        <CustomInput name='email' />
                        <ErrorMessage
                          name='email'
                          component='div'
                          style={error}
                        />
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
                        <ErrorMessage
                          name='location'
                          component='div'
                          style={error}
                        />
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
                          <ErrorMessage
                            name='lga'
                            component='div'
                            style={error}
                          />
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
                        <ErrorMessage
                          name='country'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                </Box>

                {/* Documents Section */}
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
                        <ErrorMessage
                          name='passport'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Prof of Address</Text>
                        <CustomInput name='address_proff' p='3px' type='file' />
                        <ErrorMessage
                          name='address_proff'
                          component='div'
                          style={error}
                        />
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
                        <ErrorMessage
                          name='doc_type'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Document Number</Text>
                        <CustomInput name='doc_no' />
                        <ErrorMessage
                          name='doc_no'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Document Image</Text>
                        <CustomInput name='docimage' p='3px' type='file' />
                        <ErrorMessage
                          name='docimage'
                          component='div'
                          style={error}
                        />
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
                        <DatePickerField
                          name='doc_issue_date'
                          format='YYYY-MM-DD'
                          showYearDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={50}
                          value={moment(values.doc_issue_date).format(
                            'YYYY-MM-DD'
                          )}
                        />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Document Expiry Date</Text>
                        <DatePickerField
                          name='doc_exp_date'
                          format='YYYY-MM-DD'
                          showYearDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={50}
                          value={moment(values.doc_exp_date).format(
                            'YYYY-MM-DD'
                          )}
                        />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                </Box>

                {/* Banking Details Section */}
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
                        <ErrorMessage
                          name='bank_name'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>Bank Account Number</Text>
                        <CustomInput name='bank_acc_no' />
                        <ErrorMessage
                          name='bank_acc_no'
                          component='div'
                          style={error}
                        />
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
                        <ErrorMessage
                          name='BVN'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text color='#942F8B'>TAX ID</Text>
                        <CustomInput name='tax_id' />
                        <ErrorMessage
                          name='tax_id'
                          component='div'
                          style={error}
                        />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                </Box>

                {/* Business Section */}
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
                        <ErrorMessage
                          name='agentCode'
                          component='div'
                          style={error}
                        />
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
                    // onClick={console.log('values', values, errors)}
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

const error = {
  color: 'red',
  fontSize: '12px',
};
