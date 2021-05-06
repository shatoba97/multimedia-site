import React, { FC, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./Body.scss";
import AllAnimals from './all-animals/AllAnimals';
import ToDayAnimals from './to-day/ToDayAnimals';

import Animals from '../../core/shared/components/animals/Animals';

const Body: FC<{}> = () => {

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={"/today"}>
          <Animals Component={ToDayAnimals} type={'toDay'}></Animals>
        </Route>
        <Route exact path={"/animals"}>
          <Animals Component={AllAnimals} type={'all'}></Animals>
        </Route>
      </Switch>
    </React.Fragment>
  );
};
export default Body;
