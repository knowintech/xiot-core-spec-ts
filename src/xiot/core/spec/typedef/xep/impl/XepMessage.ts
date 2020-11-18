import {XepMessageType} from '../XepMessageType';
import {XepRecord} from '../XepRecord';

export class XepMessage {

    type: XepMessageType;
    record: XepRecord | null;

    constructor(type: XepMessageType, record: XepRecord | null) {
        this.type = type;
        this.record = record;
    }
}
