import React, { useState } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { createContact } from '../../redux/contacts/contacts-actions';
import s from './ContactForm.module.css';

function ContactForm({ createContact }) {
  // === useState hook === //
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // === пише значення в useState === //
  const handleImputChange = evt => {
    const { name, value } = evt.currentTarget;

    // записує відповідне значення у відповідний useState
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

  // надсилає дані у Арр при Submit
  const onSubmitPress = evt => {
    evt.preventDefault();

    createContact(name, number);

    resetFormField();
  };

  // чистить поля name, number
  const resetFormField = () => {
    setName('');
    setNumber('');
  };

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

ContactForm.propTypes = {
  createContact: func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createContact: (name, number) => dispatch(createContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
