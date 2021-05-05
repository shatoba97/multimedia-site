import React, { FC, Fragment, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import loginPost from '../../core/service/login/login-post';
import "./Auth.scss";

const Auth: FC<{}> = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const onSubmit = (e: any) => {
    e.preventDefault();
    loginPost('token', {
      username: 'test_user_1',
      password: 'user10000'
    })
  };

  return (
    <form className="auth-container" onSubmit={onSubmit}>
      <div className="inputs-container">
        <input type="text" className="login" onChange={event => setLogin(event.target.value)}/>
        <input type="text" className="pass" onChange={event => setPass(event.target.value)}/>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Auth;
