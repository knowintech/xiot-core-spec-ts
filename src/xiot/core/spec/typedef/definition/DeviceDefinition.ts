import {DeviceType} from './urn/DeviceType';
import {ServiceType} from './urn/ServiceType';

export class DeviceDefinition {

  type: DeviceType;
  requiredServices: ServiceType[] = [];
  optionalServices: ServiceType[] = [];

  constructor(type: DeviceType,
              description: Map<string, string>,
              required: ServiceType[],
              optional: ServiceType[]) {
    this.type = type;

    if (description != null) {
      this.type.description = description;
    }

    if (required != null) {
      this.requiredServices = required;
    }
    
    if (optional != null) {
      this.optionalServices = optional;
    }
  }
}