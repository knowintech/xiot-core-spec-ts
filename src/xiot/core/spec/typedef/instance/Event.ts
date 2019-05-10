import {EventType} from '../definition/urn/EventType';
import {Argument} from './Argument';

export class Event {

  iid = 0;
  type: EventType;
  arguments: Map<number, Argument> = new Map<number, Argument>();

  status = 0;
  description = '';

  constructor(iid: number,
              type: EventType,
              description: Map<string, string>,
              list: Argument[]) {
    this.iid = iid;
    this.type = type;
    this.type.description = description;
    list.forEach(x => this.arguments.set(x.piid, x));
  }

  getArguments(): Argument[] {
    return Array.from(this.arguments.values());
  }
}
