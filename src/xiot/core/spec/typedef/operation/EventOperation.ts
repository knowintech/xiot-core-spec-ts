import {AbstractOperation} from './AbstractOperation';
import {EID} from '../xid/EID';
import {Argument} from '../instance/Argument';

export class EventOperation extends AbstractOperation {
  public aid: EID | null = null;
  public arguments: Map<number, Argument> = new Map<number, Argument>();

  getArguments(): Argument[] {
    return Array.from(this.arguments.values());
  }

  setArguments(list: Argument[]) {
    list.forEach(x => this.arguments.set(x.piid, x));
  }
}
