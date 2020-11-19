import {XepRecordEventOccurred} from '../../typedef/xep/impl/XepRecordEventOccurred';
import {EventOperationCodec} from '../operation/EventOperationCodec';

export class XepRecordDeviceEventOccurredCodec {

    public static encodeObject(record: XepRecordEventOccurred): any {
        return {
            ownerId: record.ownerId,
            event: EventOperationCodec.encodeOneQuery(record.event)
        };
    }

    public static decodeObject(o: any): XepRecordEventOccurred {
        const ownerId = o.ownerId;
        const event = EventOperationCodec.decodeOneQuery(o.event);
        return new XepRecordEventOccurred(ownerId, event);
    }
}
