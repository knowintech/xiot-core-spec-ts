import {XepMessageType} from '../XepMessageType';
import {XepRecord} from '../XepRecord';

export class XepMessage {

    type: XepMessageType;
    record: XepRecord;

    constructor(type: XepMessageType, record: XepRecord) {
        this.type = type;
        this.record = record;
    }
}
