import {DeviceType} from '../definitions/urn/DeviceType';
import {Service} from './Service';

export class Device {
  public type: DeviceType | null = null;
  public description: string = '';
  public services: Map<Number, Service> = new Map<Number, Service>();

  getServices(): Service[] {
    return Array.from(this.services.values());
  }
}
