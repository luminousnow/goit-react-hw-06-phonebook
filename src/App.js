import React from 'react';
import { connect } from 'react-redux';
import Container from './components/Container';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList';

function App({ contactList }) {
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
          {contactList.length ? (
            <ContactList />
          ) : (
            <p>У тебе ще немає контактів. Давай створимо перший!</p>
          )}
        </Section>
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  contactList: state.contacts.item,
});

export default connect(mapStateToProps, null)(App);
