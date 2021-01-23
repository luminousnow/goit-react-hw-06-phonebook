import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createContact, deleteContact, filterChange } from './contacts-actions';

// default Store
export const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};
const itemDefault = initialState.contacts.items;
const filterDefault = initialState.contacts.filter;

const itemReducer = createReducer(itemDefault, {
  [createContact]: (state, { payload }) => {
    return [payload, ...state];
  },

  [deleteContact]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload.contactId);
  },
});

const filterReducer = createReducer(filterDefault, {
  [filterChange]: (_, { payload }) => {
    return payload.query;
  },
});

export default combineReducers({
  item: itemReducer,
  filter: filterReducer,
});
