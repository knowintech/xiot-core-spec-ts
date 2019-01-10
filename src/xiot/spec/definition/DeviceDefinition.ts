import {DeviceType} from './urn/DeviceType';
import {ServiceType} from './urn/ServiceType';

export class DeviceDefinition {
  public type: DeviceType | null = null;
  public description: string = '';
  public requiredServices: ServiceType[] = [];
  public optionalServices: ServiceType[] = [];
}
