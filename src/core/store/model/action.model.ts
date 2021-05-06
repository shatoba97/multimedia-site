import { AnyAction } from 'redux';

export interface ActionIO extends AnyAction{
  type: string,
  value: any,
}