import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from "react-router-dom";
import "./App.scss";
import Auth from "./components/auth/Auth";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import { AnimalsIO } from "./core/store/model/animals.model";
import { UserIO } from "./core/store/model/user.model";
import { reducers, store } from "./core/store/store";

type StoreModel = ReturnType<typeof reducers>;

function App() {
  const [token, setToken] = useState(localStorage.getItem("access"));
  const history = useHistory();
  // const isLoggedIn = useSelector((state: UserIO) => state.token);
  // console.log(isLoggedIn);
  token
    ? window.history.pushState(undefined, "", "/today")
    : window.history.pushState(undefined, "", "/login");

  // token ? history.push("/today") : history.push("/login");

  const a = useSelector((state: StoreModel) => {
    console.log(state);
    // (store.getState().UserReducer as UserIO).token
    return state.UserReducer;
  });

  console.log(a)
  // store.subscribe(async () => {
  //   const userToken = (store.getState().UserReducer as UserIO).token;
  //   // userToken? window.history.pushState(undefined, '','/today') : window.history.pushState(undefined, '','/login');
  //   // await setTimeout(() => {}, 1000);
  //   setToken(userToken);
  //   console.log(userToken);
  //   // userToken? window.location.href = '/today' : window.location.href = '/login';
  // });

  return (
    <Router>
      <Route exact path="/">
        <Layout>
          <Content />
        </Layout>
      </Route>
      {/* <Route exact path={"/login"}>
        <Auth />
      </Route>
      <Route exact path={"/today"}>
        <React.Fragment>
          <Header />
          <Body />
        </React.Fragment>
      </Route>
      <Route exact path={"/animals"}>
        <React.Fragment>
          <Header />
          <Body />
        </React.Fragment>
      </Route> */}
    </Router>
  );
}

export default App;

historu.push("/auth")