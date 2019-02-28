import {ActionType} from '../definition/urn/ActionType';
import {Argument} from './Argument';

export class Action {

  iid: number = 0;
  type: ActionType;
  in: Map<Number, Argument> = new Map<Number, Argument>();
  out: Map<Number, Argument> = new Map<Number, Argument>();

  constructor(iid: number,
              type: ActionType,
              description: Map<String, String>,
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
