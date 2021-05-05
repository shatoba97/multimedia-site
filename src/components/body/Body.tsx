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
      <Switch>
        <Route exact path={"/today"}>
          awda
        </Route>
        <Route exact path={"/animals"}>
          ss
        </Route>
      </Switch>
    </React.Fragment>
  );
};
export default Body;
