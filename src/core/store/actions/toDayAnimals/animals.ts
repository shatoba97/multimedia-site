import { AnimalsModel } from '../../../model/animal.model';
import { ToDayAnimalsModel } from '../../../model/to-day-animals.model';
import { ActionIO } from '../../model/action.model';
import { REMOVE_TO_DAY_ANIMALS, SET_TO_DAY_ANIMALS } from './animals.action';

const setToDayAnimals = (animals: ToDayAnimalsModel[]): ActionIO => ({
  type: SET_TO_DAY_ANIMALS,
  value: animals,
});

const removeToDayAnimals = (): ActionIO => ({
  type: REMOVE_TO_DAY_ANIMALS,
  value: null,
});

const setAllAnimals = (animals: AnimalsModel[]): ActionIO => ({
  type: SET_TO_DAY_ANIMALS,
  value: animals,
});

const removeAllAnimals = (): ActionIO => ({
  type: REMOVE_TO_DAY_ANIMALS,
  value: null,
});

export default {setToDayAnimals, removeToDayAnimals, setAllAnimals, removeAllAnimals};