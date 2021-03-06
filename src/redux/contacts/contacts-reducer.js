// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
// import * as operations from './contacts-operations';

// const items = createReducer([], {
//   // [actions.fetchContactsSuccess]: (_, { payload }) => payload,
//   [operations.fetchContacts.fulfilled]: (_, { payload }) => payload,
//   // [actions.deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
//   [operations.deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
//   [operations.postContact.fulfilled]: (state, { payload }) => [...state, payload],
// });

// const isLoading = createReducer(false, {
//   [operations.fetchContacts.pending]: () => true,
//   [operations.fetchContacts.fulfilled]: () => false,
//   [operations.fetchContacts.rejected]: () => false,
//   [operations.deleteContact.pending]: () => true,
//   [operations.deleteContact.fulfilled]: () => false,
//   [operations.deleteContact.rejected]: () => false,
//   [operations.postContact.pending]: () => true,
//   [operations.postContact.fulfilled]: () => false,
//   [operations.postContact.rejected]: () => false,
// });

export default createReducer('', {
  [actions.addFilter]: (_, { payload }) => payload,
  [actions.resetFilter]: () => '',
});
