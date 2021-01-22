import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// === Create a new contact === //
const createContact = createAction('contact/create', (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));

// === Delete existing contact (on Delete button click) === //
const deleteContact = createAction('contact/delete', contactId => ({
  payload: { contactId },
}));

// === Update Filter value === //
const filterChange = createAction('filter/change', evt => ({
  payload: {
    query: evt,
  },
}));

export { createContact, deleteContact, filterChange };
