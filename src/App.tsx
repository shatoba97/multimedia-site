import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import Body from "./components/body/Body";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route path={'/'}>1 <Body/></Route>
          <Route path={'/soup'}>12 <Body/></Route>
          <Route path={'/films'}>123 <Body/></Route>
          <Route path={'/anime'}>1234 <Body/></Route>
        </Switch>
      </Router>
  );
}

export default App;
