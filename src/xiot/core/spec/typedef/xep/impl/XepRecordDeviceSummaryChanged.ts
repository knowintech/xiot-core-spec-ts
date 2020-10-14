import {XepRecord} from '../XepRecord';
import {XepRecordType} from '../XepRecordType';
import {Summary} from '../../../../../..';

export class XepRecordDeviceSummaryChanged extends XepRecord {

    readonly did: string;
    readonly summary: Summary;

    constructor(ownerId: string, did: string, summary: Summary) {
        super(ownerId);
        this.did = did;
        this.summary = summary;
    }

    type(): XepRecordType {
        return XepRecordType.DEVICE_SUMMARY_CHANGED;
    }
}
