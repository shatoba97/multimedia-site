import { FC } from 'react';
import { AnimalsModel } from '../../../../model/animal.model';
import { ToDayAnimalsModel } from '../../../../model/to-day-animals.model';
import { PageType } from '../../../../type/page.type';

export interface AnimalsIO {
  Component: FC<{animals: ToDayAnimalsModel[] | AnimalsModel[]}>
  type: PageType,
}