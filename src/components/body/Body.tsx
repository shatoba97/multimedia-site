import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import SearchRow from "../shared/search-row/SearchRow";
import "./Body.scss";

const Body: React.FC<{}> = () => {
  const searchChange = (value: string) => {
    console.log(value);
  };

  return (
    <React.Fragment>
      <SearchRow searchChange={searchChange}></SearchRow>
      <Switch>
        <Route exact path={"/"}>
          <div>1</div>
        </Route>
        <Route path={"/soup"}>
          <div>12</div>
        </Route>
        <Route path={"/films"}>
          <div>123</div>
        </Route>
        <Route path={"/anime"}>
          <div>1234</div>
        </Route>
      </Switch>
    </React.Fragment>
  );
};
export default Body;
