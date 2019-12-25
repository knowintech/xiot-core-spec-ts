import {DeviceType} from '../definition/urn/DeviceType';
import {Service} from './Service';

export class Device {

  type: DeviceType;
  description: Map<string, string> = new Map<string, string>();
  services: Map<number, Service> = new Map<number, Service>();

  constructor(type: DeviceType,
              description: Map<string, string>,
              services: Service[]) {
    this.type = type;
    this.description = description;
    services.forEach(x => this.services.set(x.iid, x));
  }

  getServices(): Service[] {
    return Array.from(this.services.values());
  }
}
