import {ServiceType} from './urn/ServiceType';
import {PropertyType} from './urn/PropertyType';
import {ActionType} from './urn/ActionType';
import {EventType} from './urn/EventType';

export class ServiceDefinition {
  public type: ServiceType | null = null;
  public description: string = '';
  public requiredProperties: PropertyType[] = [];
  public optionalProperties: PropertyType[] = [];
  public requiredActions: ActionType[] = [];
  public optionalActions: ActionType[] = [];
  public requiredEvents: EventType[] = [];
  public optionalEvents: EventType[] = [];
}
