import {ServiceType} from '../definition/urn/ServiceType';
import {Property} from './Property';
import {Action} from './Action';
import {Event} from './Event';

export class Service {
  
  iid: number = 0;
  type: ServiceType;
  properties: Map<Number, Property> = new Map<Number, Property>();
  actions: Map<Number, Action> = new Map<Number, Action>();
  events: Map<Number, Event> = new Map<Number, Event>();

  constructor(iid: number,
              type: ServiceType,
              description: Map<String, String>,
              properties: Property[],
              actions: Action[],
              events: Event[]) {
    this.iid = iid;
    this.type = type;
    this.type.description = description;

    properties.forEach(x => this.properties.set(x.iid, x));
    actions.forEach(x => this.actions.set(x.iid, x));
    events.forEach(x => this.events.set(x.iid, x));
  }

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
