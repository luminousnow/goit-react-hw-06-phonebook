// === Create default array by using Filter value === //

const getAllContacts = state => state.contacts.item;
const getFilter = state => state.contacts.filter;

const getFilteredContacts = state => {
  const allContacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );
};

export { getFilteredContacts, getAllContacts, getFilter };
