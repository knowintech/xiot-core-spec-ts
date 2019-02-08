import {EventType} from './urn/EventType';
import {ArgumentDefinition} from './ArgumentDefinition';

export class EventDefinition {
  public type: EventType | null = null;
  public description: string = '';
  public arguments: ArgumentDefinition[] = [];
}
