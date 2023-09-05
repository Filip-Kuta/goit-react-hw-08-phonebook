import React from "react";
import * as Yup from 'yup';
import { IoPersonAddOutline } from "react-icons/io5";
import { useFormik } from "formik";
import { Form, Label, Input, Button } from "./ContactForm.styled";
import { useDispatch, useSelector} from "react-redux";
import { phoneBookOperations, phoneBookSelectors} from "redux/contacts";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(phoneBookSelectors.getContacts)

   const formik = useFormik({
     initialValues: {
       name: '',
       number: '',
     },
     validationSchema: Yup.object({
       name: Yup.string()
         .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
           'Имя может состоять только из букв, апострофа, тире и пробелов.')
         .notOneOf(contacts.map(contact => contact.name), "Такой контакт уже существует")
         .required('Oбязательное поле'),
       number: Yup.string()
         .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +')
         .required('Oбязательное поле'),
     }),
     onSubmit: (values, { setSubmitting, resetForm }) => {
       dispatch(phoneBookOperations.addContact({ name: values.name, number: values.number })),
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

      <Label>Number
        <Input
          id="number"
          name="number"
          type="text"
          onChange={handleChange}
          value={values.number}
        />
        {touched.number && errors.number ? (
          <>{errors.number}</>
        ) : null}
      </Label>

      <Button type="submit" disabled={isSubmitting}><IoPersonAddOutline /> Add contact</Button>
    </Form>
  );
}