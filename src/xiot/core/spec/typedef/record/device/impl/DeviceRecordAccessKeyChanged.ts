import { DeviceRecord } from '../DeviceRecord';
import { DeviceRecordType } from '../DeviceRecordType';

export class DeviceRecordAccessKeyChanged extends DeviceRecord {

    did: string;
    key: string;

    constructor(did: string, key: string) {
        super();
        this.did = did;
        this.key = key;
    }

    subType(): string {
        return DeviceRecordType.ACCESSKEY_CHANGED.toString();
    }
}
