import React, { FC } from "react";
import SearchRow from "../shared/search-row/SearchRow";
import "./Body.scss";

const Body: React.FC<{}> = () => {
  const searchChange = (value: string) => {console.log(value)};

  return <div>
    <SearchRow searchChange={searchChange}></SearchRow>
  </div>;
};
export default Body;
