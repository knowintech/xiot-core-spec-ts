import {XepRecord} from '../XepRecord';
import {XepRecordType} from '../XepRecordType';

export class XepRecordDeviceRemoved extends XepRecord {

    readonly did: string;

    constructor(ownerId: string, did: string) {
        super(ownerId);
        this.did = did;
    }

    type(): XepRecordType {
        return XepRecordType.DEVICE_REMOVED;
    }
}
