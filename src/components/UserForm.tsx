
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { User } from '../utils/types';


// interface FormValues {
//   name: string;
//   email: string;
//   phone: string;
//   address:string
// }

export default function UserForm({data}:{data:User}){
 
  const initialValues: User = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    address:data.address,
    id:data.id
  };

  
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .required('Required'),
      address: Yup.string().required('Required'),
  });

 
  const onSubmit = (
    values: User,
    { setSubmitting }: FormikHelpers<User>
  ) => {
    console.log('Form data', values);
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <Form>
          <Box mb={2}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </Box>

          <Box mb={2}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
            />
          </Box>
          

          <Button color="primary" variant="contained" fullWidth type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

