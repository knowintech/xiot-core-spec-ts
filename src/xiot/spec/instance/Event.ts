import {EventType} from '../definition/urn/EventType';
import {Argument} from './Argument';

export class Event {
  public iid: number = 0;
  public type: EventType | null = null;
  public description: string = '';
  public arguments: Argument[] = [];
}
