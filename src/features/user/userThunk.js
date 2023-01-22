import customFetch from '../../utils/axios';
import { logoutUser } from './userSlice';

export const registerUserThunk = async (user, thunkAPI, url) => {
  try {
    const res = await customFetch.post(url, user);

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkAPI, url) => {
  try {
    const res = await customFetch.post(url, user);

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (user, thunkAPI, url) => {
  try {
    const res = await customFetch.patch(url, user);
    return res.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('unAuthorized logging out');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
