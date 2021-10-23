import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getContacts = createAsyncThunk('contacts/get', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const postContact = createAsyncThunk('contacts/post', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/contacts', credentials);
    return data;
  } catch (error) {
    console.log(error.message);
    return rejectWithValue(error);
  }
});

const deleteContact = createAsyncThunk('contacts/delete', async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error.message);
    return rejectWithValue(error);
  }
});

const patchContact = createAsyncThunk(
  'contacts/patch',

  async credentials => {
    try {
      const { id } = credentials;
      delete credentials.id;
      // console.log(credentials, id);

      const { data } = await axios.patch(`/contacts/${id}`, credentials);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  },
);

const contactsOperations = {
  getContacts,
  postContact,
  deleteContact,
  patchContact,
};

export default contactsOperations;
