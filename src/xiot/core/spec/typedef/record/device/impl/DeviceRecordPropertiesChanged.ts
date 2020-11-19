import {DeviceRecord} from '../DeviceRecord';
import {DeviceRecordType} from '../DeviceRecordType';
import {PropertyOperation} from '../../../operation/PropertyOperation';

export class DeviceRecordPropertiesChanged extends DeviceRecord {

    properties: PropertyOperation[] = [];

    constructor(properties: PropertyOperation[]) {
        super();
        this.properties = properties;
    }

    subType(): string {
        return DeviceRecordType.PROPERTIES_CHANGED.toString();
    }
}
