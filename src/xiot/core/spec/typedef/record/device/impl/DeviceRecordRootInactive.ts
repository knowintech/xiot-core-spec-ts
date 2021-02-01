import {DeviceRecord} from '../DeviceRecord';
import {DeviceRecordType} from '../DeviceRecordType';

export class DeviceRecordRootInactive extends DeviceRecord {

    did: string;

    constructor(did: string) {
        super();
        this.did = did;
    }

    subType(): string {
        return DeviceRecordType.ROOT_INACTIVE.toString();
    }
}
