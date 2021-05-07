import React, { FC } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { ToDayAnimalsModel } from "../../../core/model/to-day-animals.model";
import "./ToDayAnimals.scss";
import explore from "../../../assets/icon/explore.png";

const ToDayAnimals: FC<{ animals: ToDayAnimalsModel[], showModal: (value: any) => void }> = ({ animals, showModal }) => {
  return (
    <div className="animals-container">
      {animals.map(({ animal, my_type }, i) => {
        return (
          <Card className="animal" key={i}>
            <Button className="show-animal">
              <Image src={explore} rounded></Image>
            </Button>
            <div className="animal-data">
              <Card.Title className="name">
                <Button variant="light" onClick={(e) => showModal(animal.id)}>{animal.name}</Button>
              </Card.Title>
              <Card.Text className="type">{my_type}</Card.Text>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
export default ToDayAnimals;
