import {ActionType} from '../definition/urn/ActionType';
import {Argument} from './Argument';

export class Action {
  iid: number = 0;
  type: ActionType | null = null;
  description: string = '';
  in: Map<Number, Argument> = new Map<Number, Argument>();
  out: Map<Number, Argument> = new Map<Number, Argument>();

  getArgumentsIn(): Argument[] {
    return Array.from(this.in.values());
  }

  getArgumentsOut(): Argument[] {
    return Array.from(this.out.values());
  }

  setArgumentsIn(list: Argument[]) {
    list.forEach(x => this.in.set(x.piid, x));
  }

  setArgumentsOut(list: Argument[]) {
    list.forEach(x => this.out.set(x.piid, x));
  }
}
