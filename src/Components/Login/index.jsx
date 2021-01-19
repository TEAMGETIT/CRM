import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.scss';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { loginService } from '../../Services/LoginService';

function Login() {
  const [formValue, setFormValue] = useState({
    username: '',
    password: '',
  });

  const updateFormValue = (e, key) => {
    setFormValue({
      ...formValue,
      [key]: e.target.value,
    });
  };

  const signIn = async () => {
    const formData = new FormData();
    formData.append('username', formValue.username);
    formData.append('password', formValue.password);
    const serviceResponse = await loginService(formData);
    if (serviceResponse.status === 200) {
      localStorage.setItem('userdetails',  JSON.stringify(serviceResponse.data));
      localStorage.setItem('authenticationToken', serviceResponse.data.token)
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="w-100 d-flex">
      <div className="w-65" style={{ height: '100%', overflow: 'hidden' }}>
        <img
          style={{ maxHeight: '850px' }}
          src={`${window.location.origin}/images/login.jpg`}
        />
      </div>
      <div className="w-35">
        <div className="login">
          <div className="header">
            <h3>Login</h3>
          </div>
          <div className="text-field">
            <TextField
              type="text"
              name="email"
              placeholder="Email"
              variant="outlined"
              size="small"
              onChange={(e) => updateFormValue(e, 'username')}
            />
          </div>
          <div className="text-field">
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              variant="outlined"
              size="small"
              onChange={(e) => updateFormValue(e, 'password')}
            />
          </div>
          <div className="btn-holder">
            <button size="normal" className="btn" onClick={() => signIn()}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
