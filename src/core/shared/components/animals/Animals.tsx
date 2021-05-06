import React, { FC, useState } from "react";
import "./Animals.scss";
import { AnimalsIO } from "./model/Animals";
import { PageType } from "../../../type/page.type";
import { AnimalsModel } from "../../../model/animal.model";
import { ToDayAnimalsModel } from "../../../model/to-day-animals.model";
import {getToDayAnimals} from '../../../service/today/today-animals'
import {getAllAnimals} from '../../../service/all-animals/all-animals'

const Animals: FC<AnimalsIO> = ({ Component, type }) => {
  const [animals, setAnimals] = useState(
    [] as AnimalsModel[] | ToDayAnimalsModel[]
  );

  const toDayAnimals = () => {
    getToDayAnimals().then(resAnimals => setAnimals(resAnimals));
  };

  const AllAnimals = () => {
    getAllAnimals().then(resAnimals => setAnimals(resAnimals));
  }

  switch (type) {
    case "all":
      AllAnimals();
      break;
    case "toDay":
      toDayAnimals();
      break;
    default:
      setAnimals([]);
  }

  return (
    <React.Fragment>
      <Component animals={animals} />
    </React.Fragment>
  );
};
export default Animals;
