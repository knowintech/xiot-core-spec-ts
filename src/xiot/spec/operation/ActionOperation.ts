import {AbstractOperation} from './AbstractOperation';
import {AID} from '../xid/AID';
import {Argument} from '../instance/Argument';

export class ActionOperation extends AbstractOperation {
  public aid: AID | null = null;
  public in: Map<Number, Argument> = new Map<Number, Argument>();
  public out: Map<Number, Argument> = new Map<Number, Argument>();

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
