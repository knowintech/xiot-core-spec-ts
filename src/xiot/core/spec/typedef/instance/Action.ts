import {ActionType} from '../definition/urn/ActionType';
import {Argument} from './Argument';
import {Result} from './Result';

export class Action {

  iid = 0;
  type: ActionType;
  in: Map<number, Argument> = new Map<number, Argument>();
  out: Map<number, Argument> = new Map<number, Argument>();
  result: Result = new Result();

  constructor(iid: number,
              type: ActionType,
              description: Map<string, string>,
              argumentsIn: Argument[],
              argumentsOut: Argument[]) {
    this.iid = iid;
    this.type = type;
    this.type.description = description;
    argumentsIn.forEach(x => this.in.set(x.piid, x));
    argumentsOut.forEach(x => this.out.set(x.piid, x));
  }

  getArgumentsIn(): Argument[] {
    return Array.from(this.in.values());
  }

  getArgumentsOut(): Argument[] {
    return Array.from(this.out.values());
  }
}
