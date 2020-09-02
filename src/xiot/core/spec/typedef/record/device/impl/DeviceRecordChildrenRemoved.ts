import {DeviceRecord} from '../DeviceRecord';
/* import {Child} from '../../../../../../..'; */
import {DeviceRecordType} from '../DeviceRecordType';

export class DeviceRecordChildrenRemoved extends DeviceRecord {

    did: string;
    children: string[] = [];

    constructor(did: string) {
        super();
        this.did = did;
    }

    subType(): string {
        return DeviceRecordType.CHILDREN_REMOVED.toString();
    }
}
