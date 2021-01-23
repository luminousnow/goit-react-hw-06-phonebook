import React from 'react';
import { useSelector } from 'react-redux';
import Container from './components/Container';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList';
import { getAllContacts } from './redux/contacts/contacts-selectors';

function App() {
  const contacts = useSelector(getAllContacts);

  return (
    <>
      <Container>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm />
        </Section>

        <Section>
          <h2>Contacts</h2>
          <Filter />
          {contacts.length ? (
            <ContactList />
          ) : (
            <p>У тебе ще немає контактів. Давай створимо перший!</p>
          )}
        </Section>
      </Container>
    </>
  );
}

export default App;
