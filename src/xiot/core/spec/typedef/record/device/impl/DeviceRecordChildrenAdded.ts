import { DeviceRecord } from '../DeviceRecord';
import { Child } from '../../../../../../..';
import { DeviceRecordType } from '../DeviceRecordType';

export class DeviceRecordChildrenAdded extends DeviceRecord {

    did: string;
    children: Child[] = [];

    constructor(did: string) {
        super();
        this.did = did;
    }

    subType(): string {
        return DeviceRecordType.CHILDREN_ADDED.toString();
    }
}
