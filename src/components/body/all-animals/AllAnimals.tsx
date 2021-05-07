import React, { FC } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { AnimalsModel } from "../../../core/model/animal.model";
import "./AllAnimals.scss";

import explore from "../../../assets/icon/explore.png";

const AllAnimals: FC<{
  animals: AnimalsModel[];
  showModal: (value: any) => void;
}> = ({ animals, showModal }) => {
  return (
    <div className="animals-container">
      {animals.map((animal, i) => {
        return (
          <Card className="animal" key={i}>
            <Button className="show-animal" onClick={(e) => showModal(animal.id)}>
              <Image src={explore} rounded></Image>
            </Button>
            <div className="animal-data">
              <Card.Title className="name-container">
                <Button className="name" variant="light" onClick={(e) => showModal(animal.id)}>
                  {animal.name}
                </Button>
              </Card.Title>
                <p className="type">Тип: {animal?.spec_parent_name}</p>
                <p className="sub-type">Подтип: {animal?.spec_name}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
export default AllAnimals;
