import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { StoreModel } from "../../../store/store";

export const Layout: FC = ({ children }) => {
  const token = useSelector((state: StoreModel) => state.userReducer.token);
  return (
    <React.Fragment>
      {token ? children : <Redirect to="/login" />}
    </React.Fragment>
  );
};
