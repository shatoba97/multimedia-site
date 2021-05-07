import { Reducer } from 'react';
import { REMOVE_TO_DAY_ANIMALS, SET_TO_DAY_ANIMALS } from '../../actions/toDayAnimals/animals.action';
import initialAnimalsState from '../../initial-state/initial-animals-state';
import { ActionIO } from '../../model/action.model';
import { AnimalsIO } from '../../model/animals.model';


const AnimalsReducer = (animals: AnimalsIO = initialAnimalsState, action: ActionIO): AnimalsIO => {
  switch (action.type) {
    case SET_TO_DAY_ANIMALS: return {...animals, ...action.value};
    case REMOVE_TO_DAY_ANIMALS: return initialAnimalsState;
    default: return animals;
  }
};

export default AnimalsReducer;