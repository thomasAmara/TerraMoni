import React from 'react';
import { useField, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box } from '@chakra-ui/react';

const DatePickerField = ({ ...props }) => {
  //   let date = new Date();
  //   let todayDate = moment(date).format('YYYY-MM-DD');

  //   console.log('new date', todayDate);
  //   console.log('date', date);
  // const [field, { setValue }] = useField(props);
  const [field, , { form }] = useField(props);

  const handleChange = (date) => {
    form.setFieldValue(field.name, date);
  };

  return (
    <Box width='100%'>
      <DatePicker
        {...field}
        {...props}
        // selected={field.value && new Date(field.value)}
        selected={field.value ? new Date(field.value) : null}
        // selected={moment(field.value).format('YYYY-MM-DD')}
        // onChange={(val) => {
        //   setValue(val);
        // }}

        onChange={handleChange}
      />
      <ErrorMessage component='div' name={field.name} style={errorMessage} />
    </Box>
  );
};
export default DatePickerField;
const errorMessage = {
  color: 'red',
  position: 'absolute',
  fontSize: '10px',
};
