import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const newLocal = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = newLocal;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.mesage);
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

const getContactData = createAsyncThunk('auth/getContactData', async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  if (!token) return;
  token.set(state.auth.token);

  try {
    const data = await axios.get('/users/current');
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

export const authOperations = {
  register,
  login,
  logout,
  getContactData,
};

export default authOperations;
