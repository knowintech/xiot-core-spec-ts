import {ServiceTemplate} from './ServiceTemplate';
import {DeviceType} from '../definition/urn/DeviceType';

/**
 * ouyang
 */
export class DeviceTemplate {

    type: DeviceType;
    description: Map<string, string> = new Map<string, string>();
    services: Map<number, ServiceTemplate> = new Map<number, ServiceTemplate>();

    constructor(type: DeviceType,
                description: Map<string, string>,
                services: ServiceTemplate[]) {
        this.type = type;

        if (description != null) {
            this.description = description;
        }

        services.forEach(x => this.services.set(x.iid, x));
    }

    getServices(): ServiceTemplate[] {
        return Array.from(this.services.values());
    }
}
