import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../redux/contacts/contacts-actions';
import s from './ContactForm.module.css';

function ContactForm() {
  // === useState hook === //
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // === пише значення в Store === //
  const handleImputChange = evt => {
    const { name, value } = evt.currentTarget;

    // записує відповідне значення у відповідний State
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  // on Submit
  const onSubmitPress = evt => {
    evt.preventDefault();

    // checks the unique Name
    if (
      contactsList.find(item => item.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contact`);
      return;
    }

    dispatch(createContact(name, number));
    resetFormField();
  };

  // чистить поля name, number
  const resetFormField = () => {
    setName('');
    setNumber('');
  };

  const contactsList = useSelector(state => state.contacts.item);
  const dispatch = useDispatch();

  return (
    <>
      <form onSubmit={onSubmitPress} className={s.form}>
        <fieldset className={s.fieldset}>
          <label className={s.label}>
            <span>name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleImputChange}
              className={s.input}
            />
          </label>
          <label className={s.label}>
            <span>number</span>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handleImputChange}
              className={s.input}
            />
          </label>
          <button
            type="submit"
            className={s.button}
            disabled={!(name && number)}
          >
            <span>add contacts</span>
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default ContactForm;
