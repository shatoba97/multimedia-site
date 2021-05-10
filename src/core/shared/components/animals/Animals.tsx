import React, { FC, useEffect, useState } from "react";
import "./Animals.scss";
import { AnimalsIO } from "./model/Animals";
import { AnimalsModel } from "../../../model/animal.model";
import {
  getAllAnimals,
  getToDayAnimals,
  getAnimalById,
} from "../../../service/animals/animals";
import { Button, Modal } from "react-bootstrap";

const Animals: FC<AnimalsIO> = ({ Component, type }) => {
  const [show, setShow] = useState(false);
  const [activeAnimal, setActiveAnimal] = useState({} as AnimalsModel);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showModal = (id: number) => {
    getAnimalById(id).then((resAnimal) => {
      setActiveAnimal(resAnimal);
      console.log(resAnimal);
      handleShow();
    });
  };
  const [animals, setAnimals] = useState([] as any[]);

  useEffect(() => {
    let cleanupFunction = false;
    const toDayAnimals = () => {
      getToDayAnimals().then((resAnimals) =>
        !cleanupFunction ? setAnimals(resAnimals) : false
      );
    };

    const allAnimals = () => {
      getAllAnimals().then((resAnimals) =>
        !cleanupFunction ? setAnimals(resAnimals) : false
      );
    };
    switch (type) {
      case "all":
        allAnimals();
        break;
      case "toDay":
        toDayAnimals();
        break;
      default:
        setAnimals([]);
    }
    return () => {
      cleanupFunction = true;
    };
  }, []);

  const calculateAge = (dob: Date): string => {
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);

    const y = Math.abs(ageDt.getUTCFullYear() - 1970);
    return `лет: ${y}, месяцев:${ageDt.getMonth()}`;
}

  return (
    <React.Fragment>
      <Component animals={animals as any[]} showModal={showModal} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Информация о животном</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p className="name">Имя: {activeAnimal.name}</p>
            <p className="height">
              Рост: 
              {
                activeAnimal?.animal_attributes?.find(
                  (attr) => attr.name === "height"
                )?.value
              }
            </p>
            <p className="width">
              Вес: 
              {
                activeAnimal?.animal_attributes?.find(
                  (attr) => attr.name === "weight"
                )?.value
              }
            </p>
            <p className="age">Возраст: {activeAnimal?.birth_date? calculateAge(new Date(activeAnimal?.birth_date)): ''}</p>
            <p className="type">Тип: {activeAnimal?.spec_parent_name}</p>
            <p className="sub-type">Подтип: {activeAnimal?.spec_name}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
export default Animals;
