import { createSelector } from 'reselect';

const getContacts = state => state.contacts;

const getFilter = state => state.filter;

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

const getFilteredContacts = createSelector([getFilter, getContacts], (filter, contacts) => {
  let contactsList = [];
  if (!filter) return contacts;
  contactsList = getVisibleContacts(contacts, filter);
  return contactsList;
});

// const getLoader = state => state.contacts.isLoading;
const getLoader = state => false; // заглушка

export { getFilteredContacts, getFilter, getContacts, getLoader };
