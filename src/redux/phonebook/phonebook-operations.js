import { createAsyncThunk } from '@reduxjs/toolkit';
import * as fetchAPI from '../../server-API/API-requests';
// import * as actions from './phonebook-actions';

export const fetchContacts = createAsyncThunk('fetchContacts', async (_, { rejectWithValue }) => {
  try {
    const contacts = await fetchAPI.fetchContacts();
    return contacts;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteContact = createAsyncThunk('deleteContact', async (id, { rejectWithValue }) => {
  try {
    await fetchAPI.deleteContact(id);
    return id;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const postContact = createAsyncThunk('postContact', async (data, { rejectWithValue }) => {
  try {
    const postedContact = await fetchAPI.postContact(data);
    return postedContact;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// export const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsRequest());

//   try {
//     const contacts = await fetchAPI.fetchContacts();
//     dispatch(actions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error));
//   }
// };

// export const deleteContact = id => async dispatch => {
//   dispatch(actions.deleteContactRequest());

//   try {
//     await fetchAPI.deleteContact(id);
//     dispatch(actions.deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(actions.deleteContactError(error));
//   }
// };

// export const postContact = data => async dispatch => {
//   dispatch(actions.postContactRequest());

//   try {
//     const postedContact = await fetchAPI.postContact(data);
//     dispatch(actions.postContactSuccess(postedContact));
//   } catch (error) {
//     dispatch(actions.postContactError(error));
//   }
// };
