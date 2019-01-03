import {EventType} from './urn/EventType';
import {PropertyType} from './urn/PropertyType';

export class EventDefinition {
  public type: EventType | null = null;
  public description: string = '';
  public arguments: PropertyType[] = [];
}
