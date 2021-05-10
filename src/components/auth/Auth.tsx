import React, { FC, useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import loginPost from "../../core/service/login/login-post";
import "./Auth.scss";

const Auth: FC<{}> = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({} as { detail?: string });

  const history = useHistory();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    await loginPost({
     username: "test_user_1",// username: login, //username: "test_user_1",
     password: "user10000",// password: pass, //password: "user10000",
    })
      .then(() => {
        setError({});
        history.push("/today");
      })
      .catch((e) => {
        if (e.response.status === 401) {
          setError(e.response.data as { detail?: string });
        }
      });
  };

  return (
    <form className="auth-container" onSubmit={onSubmit}>
      <div className="inputs-container">
        <FormControl
          placeholder="Enter login"
          aria-label="Enter login"
          aria-describedby="login-form"
          className="login"
          required
          onChange={(event) => setLogin(event.target.value)}
        />
        <FormControl
          placeholder="Enter password"
          aria-label="Enter password"
          aria-describedby="password-form"
          className="pass"
          required
          onChange={(event) => setPass(event.target.value)}
        />
      </div>
      <Button className="login-button" type="submit">
        Login
      </Button>
      {error?.detail && (
        <p className="error">Имя пользователя или пароль введены не верно</p>
      )}
    </form>
  );
};

export default Auth;
