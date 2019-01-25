import {ActionType} from '../definition/urn/ActionType';
import {Argument} from './Argument';

export class Action {
  public iid: number = 0;
  public type: ActionType | null = null;
  public description: string = '';
  public in: Argument[] = [];
  public out: Argument[] = [];
}
