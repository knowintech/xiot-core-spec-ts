import {ServiceType} from '../definitions/urn/ServiceType';
import {Property} from './Property';
import {Action} from './Action';
import {Event} from './Event';

export class Service {
  public iid: number = 0;
  public type: ServiceType | null = null;
  public description: string = '';
  public properties: Map<Number, Property> = new Map<Number, Property>();
  public actions: Map<Number, Action> = new Map<Number, Action>();
  public events: Map<Number, Event> = new Map<Number, Event>();

  getProperties(): Property[] {
    return Array.from(this.properties.values());
  }

  getActions(): Action[] {
    return Array.from(this.actions.values());
  }

  getEvents(): Event[] {
    return Array.from(this.events.values());
  }
}
