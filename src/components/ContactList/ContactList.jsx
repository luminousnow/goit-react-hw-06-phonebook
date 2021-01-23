import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';

function ContactList() {
  const contactList = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.contactList}>
      {contactList.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}

export default ContactList;
