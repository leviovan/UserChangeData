import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../..';

interface UserData {
  firstName: string;
  email: string;
  bio: string;
  country: string;
  city: string;
  addres: string;
}

const initialState: UserData = {
  addres: '',
  firstName: '',
  email: '',
  bio: '',
  country: '',
  city: '',
};

const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId: number) => {

    const response = await fetch(`https://reqres.in/api/users/${userId}`)

    return (await response.json()) as UserData
  },
)

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export const {  } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
