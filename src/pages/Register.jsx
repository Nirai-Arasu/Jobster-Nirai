import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('trigger');
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      console.log('Please Fill Out All Fields');
      toast.error('Please Fill Out All Fields');
      return;
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Register' : 'Login'}</h3>
        {values.isMember && (
          <FormRow
            type={'text'}
            name={'name'}
            value={values.name}
            handleChange={handleChange}
            labelText={'name'}
          />
        )}
        <FormRow
          type={'email'}
          name={'email'}
          value={values.email}
          handleChange={handleChange}
          labelText={'email'}
        />
        <FormRow
          type={'password'}
          name={'password'}
          value={values.password}
          handleChange={handleChange}
          labelText={'password'}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>

        <p>
          {values.isMember ? 'Already a member?' : 'Not a member yet?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {!values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
