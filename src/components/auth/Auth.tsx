import React, { FC, Fragment, useState } from "react";
import { Route, BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import loginPost from '../../core/service/login/login-post';
import "./Auth.scss";

const Auth: FC<{}> = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const history = useHistory();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    await loginPost({
      username: 'test_user_1',
      password: 'user10000'
    });
    history.push('/today');
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
