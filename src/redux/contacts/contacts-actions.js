import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
import { CREATE, DELETE, FILTER_CHANGE } from './contacts-action-types';

// === Create a new contact === //
const createContact = createAction(CREATE, (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));

// === Delete existing contact (on Delete button click) === //
const deleteContact = createAction(DELETE, contactId => ({
  payload: { contactId },
}));

// === Update Filter value === //
const handleFilterChange = createAction(FILTER_CHANGE, evt => ({
  payload: {
    query: evt,
  },
}));

export { createContact, deleteContact, handleFilterChange };
