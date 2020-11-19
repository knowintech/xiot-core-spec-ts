import { DeviceRecord } from '../DeviceRecord';
import { DeviceRecordType } from '../DeviceRecordType';
import {Child} from '../../../child/Child';

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
