import React from "react";
import { useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Auth from "./components/auth/Auth";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import { Layout } from "./core/shared/components/layout/Layout";
import { StoreModel } from "./core/store/store";

function App() {
  const token = useSelector((state: StoreModel) => {
    return state.userReducer.token;
  });

  return (
    <Router>
      <Route exact path="/">
        {!token ? <Redirect to="/login" /> : <Redirect to="/today" />}
      </Route>
      <Route exact path={"/login"}>
        <Auth />
      </Route>
      <Route exact path={"/today"}>
        <Layout>
          <Header />
          <Body />
        </Layout>
      </Route>
      <Route exact path={"/animals"}>
        <Layout>
          <Header />
          <Body />
        </Layout>
      </Route>
    </Router>
  );
}

export default App;
