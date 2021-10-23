import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-slice';
import authSlice from './auth/auth-slice';
import filterReducer from './contacts/contacts-reducer';
import modalReducer from './modal/modal-reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authSlice,
  modal: modalReducer,
});

export default configureStore({
  reducer: rootReducer,
});
