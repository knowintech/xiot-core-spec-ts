import {DeviceType} from '../definition/urn/DeviceType';
import {Service} from './Service';

export class Device {

  type: DeviceType;
  services: Map<Number, Service> = new Map<Number, Service>();

  constructor(type: DeviceType,
              description: Map<String, String>,
              services: Service[]) {
    this.type = type;
    this.type.description = description;
    services.forEach(x => this.services.set(x.iid, x));
  }

  getServices(): Service[] {
    return Array.from(this.services.values());
  }
}
