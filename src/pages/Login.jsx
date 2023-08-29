import { Box, Button, Image, Input, Text } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import Bg from '../Assets/loginBg.png';
import Apple from '../Assets/appleIcon.svg';
import Google from '../Assets/googleIcon.svg';
import Meta from '../Assets/metaIcon.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate('/register', { replace: true }),
    [navigate]
  );
  return (
    <div>
      <Box
        display='flex'
        flexDirection='row'
        height='100vh'
        width='100%'
        maxWidth='1440px'
      >
        <Box maxWidth='860px' width='100%' px='30px'>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            width='100%'
            height='100%'
            alignItems='center'
            maxWidth='700px'
            px='15px'
          >
            <Text fontSize='48px' fontWeight='700' color='#942F8B'>
              Sign In
            </Text>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              margin='0 auto'
              //   justifyContent='center'
              px='25px'
              width='100%'
              maxWidth='510px'
              justifyContent='space-between'
            >
              <Box
                display='flex'
                p='5px'
                justifyContent='center'
                borderRadius='8px'
                // p='5px'
                maxWidth='130px'
                width='100%'
                height='52px'
                bgColor='#F7F7F7'
              >
                <Image src={Google} alt='google' />
              </Box>
              <Box
                display='flex'
                p='5px'
                justifyContent='center'
                borderRadius='8px'
                // p='5px'
                maxWidth='130px'
                width='100%'
                height='52px'
                bgColor='#F7F7F7'
              >
                <Image src={Meta} alt='google' />
              </Box>
              <Box
                display='flex'
                p='5px'
                justifyContent='center'
                borderRadius='8px'
                // p='5px'
                maxWidth='130px'
                width='100%'
                height='52px'
                bgColor='#F7F7F7'
              >
                <Image src={Apple} alt='google' />
              </Box>
            </Box>
            <Box py='20px' maxWidth='600px' px='25px'>
              <Formik>
                <Form>
                  <Input mt='20px' type='email' name='email' />
                  <Input mt='20px' type='password' name='password' />
                </Form>
              </Formik>
            </Box>
            <Box maxWidth='600px' py='15px' px='20px'>
              <Button width='100%' colorScheme='pink'>
                Login
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          bgImage={Bg}
          p='20px'
          width='100%'
          backgroundPosition='100% 100%'
          backgroundSize='cover'
          maxWidth='580px'
        >
          <Box
            display='flex'
            width='100%'
            height='100%'
            justifyContent='center'
            flexDirection='column'
            alignItems='center'
          >
            <Box>
              <Text fontSize='48px' fontWeight='700' color='#FFF'>
                Hello !
              </Text>
              <Text fontSize='18px' fontWeight='500' color='#FFF'>
                Start your business with us
              </Text>
            </Box>
            <Box mt='20px'>
              <Button color='#FFF' onClick={handleOnClick} variant='outline'>
                Create Account
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Login;

// const Basic = () => (
//   <div>
//     <h1>Anywhere in your app!</h1>
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <input
//             type='email'
//             name='email'
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.email && touched.email && errors.email}
//           <input
//             type='password'
//             name='password'
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {errors.password && touched.password && errors.password}
//           <button type='submit' disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );
