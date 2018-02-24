import {ServiceType} from '../definitions/urn/ServiceType';
import {Property} from './Property';
import {Action} from './Action';

export class Service {
  public iid: number;
  public type: ServiceType;
  public description: string;
  public properties: Map<Number, Property>;
  public actions: Map<Number, Action>;
  public events: Map<Number, Event>;

  constructor() {
    this.properties = new Map<Number, Property>();
    this.actions = new Map<Number, Action>();
    this.events = new Map<Number, Event>();
  }
}
