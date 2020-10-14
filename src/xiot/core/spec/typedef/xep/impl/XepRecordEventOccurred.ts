import {XepRecord} from '../XepRecord';
import {XepRecordType} from '../XepRecordType';
import {EventOperation, Summary} from '../../../../../..';

export class XepRecordEventOccurred extends XepRecord {

    readonly event: EventOperation;

    constructor(ownerId: string, event: EventOperation) {
        super(ownerId);
        this.event = event;
    }

    type(): XepRecordType {
        return XepRecordType.DEVICE_EVENT_OCCURRED;
    }
}
