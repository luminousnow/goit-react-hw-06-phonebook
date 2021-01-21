import { combineReducers } from 'redux';
import { CREATE, DELETE, FILTER_CHANGE } from './contacts-action-types';

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

// reducers
const itemReducer = (state = itemDefault, { type, payload }) => {
  switch (type) {
    case CREATE:
      // checks the unique Name
      if (
        state.find(
          ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
        )
      ) {
        alert(`${payload.name} is already in contact`);
        return state;
      }

      return [payload, ...state];

    case DELETE:
      return state.filter(({ id }) => id !== payload.contactId);

    default:
      return state;
  }
};

const filterReducer = (state = filterDefault, { type, payload }) => {
  switch (type) {
    case FILTER_CHANGE:
      return payload.query;

    default:
      return state;
  }
};

export default combineReducers({
  item: itemReducer,
  filter: filterReducer,
});
