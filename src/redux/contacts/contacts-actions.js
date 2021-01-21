import { v4 as uuidv4 } from 'uuid';
import { CREATE, DELETE, FILTER_CHANGE } from './contacts-action-types';

// === Create a new contact === //
const createContact = (name, number) => ({
  type: CREATE,
  payload: { id: uuidv4(), name, number },
});

// === Delete existing contact (on Delete button click) === //
const deleteContact = contactId => ({
  type: DELETE,
  payload: { contactId },
});

// === Update Filter value === //
const handleFilterChange = evt => ({
  type: FILTER_CHANGE,
  payload: {
    query: evt,
  },
});

export { createContact, deleteContact, handleFilterChange };
