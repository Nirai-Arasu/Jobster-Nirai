import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';
import FormSelect from '../../components/FormSelect';
import { addJob, clearValues, handleChange } from '../../features/job/jobSlice';
import { getUserFromLocalStorage } from '../../utils/localStorage';

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(position && company && jobLocation)) {
      return toast.error('Please fill out all fields');
    }
    dispatch(addJob({ position, company, jobLocation, jobType, status }));
  };

  useEffect(() => {
    if (!isEditing) {
      const value = user.location;
      const name = 'jobLocation';

      dispatch(handleChange({ name, value }));
    }
  }, []);
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          <FormRow
            type="input"
            name="position"
            labelText="Position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="input"
            name="company"
            labelText="Company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="input"
            name="jobLocation"
            labelText="job Location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormSelect
            options={statusOptions}
            name="status"
            labelText="Status"
            handleChange={handleJobInput}
            value={status}
          />
          <FormSelect
            options={jobTypeOptions}
            name="jobType"
            labelText="JobType"
            handleChange={handleJobInput}
            value={jobType}
          />

          <div className="btn-container">
            <button
              className="btn btn-block clear-btn"
              type="button"
              onClick={() => dispatch(clearValues())}
            >
              Clear
            </button>
            <button
              className="btn btn-block submit-btn"
              type="submit"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
