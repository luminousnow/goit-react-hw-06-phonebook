import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';

function ContactList({ contactList, deleteContact }) {
  return (
    <ul className={s.contactList}>
      {contactList.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => deleteContact(id)}
        />
      ))}
    </ul>
  );
}

// === Create default array by using Filter value === //
const getFilteredContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = state => ({
  contactList: getFilteredContacts(state.contacts.item, state.contacts.filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId => dispatch(deleteContact(contactId)),
});

ContactList.propTypes = {
  contactList: array.isRequired,
  deleteContact: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
