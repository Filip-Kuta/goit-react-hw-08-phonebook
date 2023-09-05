import React from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from "redux/auth";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { Form, Label, Input, Button } from "../ContactForm/ContactForm.styled";

function RegisterForm() {
  const dispatch = useDispatch();

    const formik = useFormik({
     initialValues: {
            name: '',
            email: '',
            password: "",
     },
     validationSchema: Yup.object({
       name: Yup.string().required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
       password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
     }),
     onSubmit: (values, { setSubmitting, resetForm }) => {
       dispatch(authOperations.userRegistration({ name: values.name, email: values.email, password: values.password})),
         setSubmitting(false),
         resetForm()
     },
   });
    const { handleSubmit, handleChange, isSubmitting, values, touched, errors } = formik;
  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name
        <Input
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
        {touched.name && errors.name ? (
          <>{errors.name}</>
        ) : null}
      </Label>

      <Label>Email
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email ? (
          <>{errors.email}</>
        ) : null}
          </Label>
          
          <Label>Password
        <Input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
        />
        {touched.password && errors.password ? (
          <>{errors.password}</>
        ) : null}
      </Label>

      <Button type="submit" disabled={isSubmitting}>Registration</Button>
    </Form>
  );
}

export default RegisterForm;
