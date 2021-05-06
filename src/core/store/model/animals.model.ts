import { AnimalsModel } from '../../model/animal.model';
import { ToDayAnimalsModel } from '../../model/to-day-animals.model';

export interface AnimalsIO {
  toDayAnimals: ToDayAnimalsModel[],
  allAnimals: AnimalsModel[],
}