import React from 'react';
import { useField, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box } from '@chakra-ui/react';
import { moment } from 'moment';

const DatePickerField = ({ ...props }) => {
  const [field, { setValue }] = useField(props);

  // const handleChange = (date) => {
  //   const formattedDate = date ? moment(date).format('YYYY-MM-DD') : ''; // Format the date
  //   setValue(field.name, formattedDate);
  // };
  return (
    <Box width='100%'>
      <DatePicker
        {...field}
        {...props}
        // selected={field.value && new Date(field.value)}
        selected={field.value ? new Date(field.value) : null}
        // selected={moment(field.value).format('YYYY-MM-DD')}
        onChange={(val) => {
          setValue(val);
        }}
        // onChange={handleChange}
      />
      {/* <ErrorMessage component='div' name={field.name} style={errorMessage} /> */}
    </Box>
  );
};
export default DatePickerField;
// const errorMessage = {
//   color: 'red',
//   position: 'absolute',
//   fontSize: '10px',
// };
