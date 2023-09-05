import React from "react";
import { Container } from "../components/App/App.styled";
import Title from "../components/Title";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";

function ContactsView() {
      return (
    <Container>
        <Title title={"Phonebook"} />
        <ContactForm />
        <Filter/>
        <Title title={"Contacts"} />
    <ContactList/>  
    </Container>
  )
}

export default ContactsView;