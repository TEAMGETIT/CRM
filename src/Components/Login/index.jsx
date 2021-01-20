import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.scss';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { loginService } from '../../Services/LoginService';
import Loader from '../Loader';

function Login() {
  const [formValue, setFormValue] = useState({
    username: '',
    password: '',
  });
  const [loader, setLoader] = useState(false);
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
    setLoader(true);
    const serviceResponse = await loginService(formData);
    if (serviceResponse.status === 200) {
      localStorage.setItem('userdetails', JSON.stringify(serviceResponse.data));
      localStorage.setItem('authenticationToken', serviceResponse.data.token);
      window.location.href = '/dashboard';
    }
    setLoader(false);
  };

  return (
    <div className="w-100 d-flex">
      <Loader status={loader} />
      <div className="w-65" style={{ height: '100%', overflow: 'hidden' }}>
        <img
          style={{ maxHeight: '850px' }}
          src={`${window.location.origin}/images/login.jpg`}
        />
      </div>
      <div className="w-35 d-flex ai-c">
        <div className="login w-100">
          <div className="header">
            <h3>Login</h3>
          </div>
          <div className="w-70 text-field">
            <TextField
              type="text"
              name="username"
              placeholder="Username"
              variant="outlined"
              size="small"
              onChange={(e) => updateFormValue(e, 'username')}
            />
          </div>
          <div className="w-70 text-field">
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              variant="outlined"
              size="small"
              onChange={(e) => updateFormValue(e, 'password')}
            />
          </div>
          <div className="btn-holder d-flex w-70 jc-c">
            <button size="normal" className="btn btn-primary" onClick={() => signIn()}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
