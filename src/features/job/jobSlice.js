import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { addJobThunk, editJobThunk, deleteJobThunk } from './jobThunk';

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

export const addJob = createAsyncThunk('job/addJob', addJobThunk);
export const editJob = createAsyncThunk('job/editJob', editJobThunk);
export const deleteJob = createAsyncThunk('jobs/deleteJob', deleteJobThunk);

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    editValue: (state, { payload }) => {
      return { ...state, ...payload, isEditing: true };
    },
    clearValues: () => {
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
    builder.addCase(editJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editJob.fulfilled, (state) => {
      state.isLoading = false;
      toast.success('job edit sucessfull');
    });
    builder.addCase(editJob.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
    builder.addCase(deleteJob.fulfilled, (state, { payload }) => {
      console.log(payload.msg);
      toast.success(payload.msg);
    });
    builder.addCase(deleteJob.rejected, (state, { payload }) => {
      toast.error(payload);
    });
  },
});

export default jobSlice.reducer;

export const { handleChange, clearValues, editValue } = jobSlice.actions;
