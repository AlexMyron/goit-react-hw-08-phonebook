import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = [];

const contacts = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, action) {
      return action.payload;
      // state = [...state, action.payload];
    },
    [contactsOperations.postContact.fulfilled](state, action) {
      return [...state, action.payload];
      // return [...state, action.payload.data];
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
    [contactsOperations.patchContact.fulfilled](state, action) {
      return [...state.filter(({ id }) => id !== action.payload.id), action.payload];
    },
  },
});

// export const { addContact, deleteContact } = contacts.actions;
export default contacts.reducer;
