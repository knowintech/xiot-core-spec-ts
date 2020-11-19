import {DeviceType} from '../definition/urn/DeviceType';

export class DeviceTypeDTO {

    type: DeviceType;
    description: Map<string, string> = new Map<string, string>();

    constructor(type: DeviceType, description: Map<string, string>) {
        this.type = type;
        this.description = description;
    }
}
