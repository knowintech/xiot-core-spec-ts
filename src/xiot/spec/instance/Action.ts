import {ActionType} from '../definitions/urn/ActionType';

export class Action {
  public iid: number = 0;
  public type: ActionType | null = null;
  public description: string = '';
  public in: Number[] = [];
  public out: Number[] = [];
}
