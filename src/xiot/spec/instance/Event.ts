import {EventType} from '../definition/urn/EventType';
import {Argument} from './Argument';

export class Event {
  iid: number = 0;
  type: EventType | null = null;
  description: string = '';
  arguments: Map<Number, Argument> = new Map<Number, Argument>();

  getArguments(): Argument[] {
    return Array.from(this.arguments.values());
  }

  setArguments(list: Argument[]) {
    list.forEach(x => this.arguments.set(x.piid, x));
  }
}
