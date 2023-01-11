import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { logoutUser } from '../user/userSlice';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const addJob = createAsyncThunk('job/addJob', async (job, thunkApi) => {
  try {
    const resp = await customFetch.post('/jobs', job, {
      headers: {
        authorization: `Bearer ${thunkApi.getState().user.user.token}`,
      },
    });
    thunkApi.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      thunkApi.dispatch(logoutUser);
      return thunkApi.rejectWithValue('Unauthorized Loging out...');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      console.log(payload, 'sad');
      const { name, value } = payload;
      console.log('final', name, value);
      state[name] = value;
    },
    clearValues: () => {
      console.log(getUserFromLocalStorage().location);
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || '',
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addJob.fulfilled, (state) => {
      state.isLoading = false;
      toast.success('New job added');
    });
    builder.addCase(addJob.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export default jobSlice.reducer;

export const { handleChange, clearValues } = jobSlice.actions;
