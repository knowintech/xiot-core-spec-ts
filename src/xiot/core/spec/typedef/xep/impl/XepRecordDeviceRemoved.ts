import {XepRecord} from '../XepRecord';
import {XepRecordType} from '../XepRecordType';
import {Summary} from '../../../../../..';

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
