import {DeviceRecord} from '../DeviceRecord';
import {DeviceRecordType} from '../DeviceRecordType';
import {DeviceType} from '../../../definition/urn/DeviceType';

export class DeviceRecordDeviceTypeChanged extends DeviceRecord {

    did: string;
    type: DeviceType;

    constructor(did: string, type: DeviceType) {
        super();
        this.did = did;
        this.type = type;
    }

    subType(): string {
        return DeviceRecordType.DEVICE_TYPE_CHANGED.toString();
    }
}
