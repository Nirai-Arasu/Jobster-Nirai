import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FormRow } from '../../components/index';

import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { updateUser } from '../../features/user/userSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);
  const [details, setDetails] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    console.log('handler');
    e.preventDefault();
    const { name, email, lastName, location } = details;
    console.log(details);
    if (!(name && email && lastName && location)) {
      toast.error('Please fill all the fields');
      return;
    }
    dispatch(updateUser(details));
  };
  return (
    <Wrapper>
      <form className="form">
        <div className="form-center">
          <FormRow
            type={'input'}
            name={'name'}
            value={details.name}
            handleChange={handleChange}
            labelText={'Name'}
          />

          <FormRow
            type={'input'}
            name={'lastName'}
            value={details.lastName}
            handleChange={handleChange}
            labelText={'Last Name'}
          />
          <FormRow
            type={'input'}
            name={'email'}
            value={details.email}
            handleChange={handleChange}
            labelText={'Email'}
          />
          <FormRow
            type={'input'}
            name={'location'}
            value={details.location}
            handleChange={handleChange}
            labelText={'Location'}
          />
          <button
            className="btn btn-block"
            type="submit"
            onClick={submitHandler}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
