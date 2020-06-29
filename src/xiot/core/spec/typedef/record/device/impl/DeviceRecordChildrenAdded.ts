import { DeviceRecord } from '../DeviceRecord';
import { DeviceChild } from '../../../../../../..';
import { DeviceRecordType } from '../DeviceRecordType';

export class DeviceRecordChildrenAdded extends DeviceRecord {

    did: string;
    children: DeviceChild[] = [];

    constructor(did: string) {
        super();
        this.did = did;
    }

    subType(): string {
        return DeviceRecordType.CHILDREN_ADDED.toString();
    }
}
