import {DeviceRecord} from '../DeviceRecord';
import {DeviceChild} from '../../../../../../..';
import {DeviceRecordType} from '../DeviceRecordType';

export class DeviceRecordChildrenRemoved extends DeviceRecord {

    children: DeviceChild[] = [];

    constructor(did: string) {
        super(did);
    }

    subType(): string {
        return DeviceRecordType.CHILDREN_REMOVED.toString();
    }
}
