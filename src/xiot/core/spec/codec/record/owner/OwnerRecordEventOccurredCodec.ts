import {EventOperationCodec} from '../../../../../..';
import {OwnerRecordEventOccurred} from '../../../typedef/record/owner/impl/OwnerRecordEventOccurred';

export class OwnerRecordEventOccurredCodec {

    static encode(record: OwnerRecordEventOccurred): any {
        return {
            appId: record.appId,
            ownerId: record.ownerId,
            event: EventOperationCodec.encodeOneQuery(record.event),
        };
    }

    static decode(o: any): OwnerRecordEventOccurred {
        const appId = o.appId;
        const ownerId = o.ownerId;
        const event: any = o.event;
        return new OwnerRecordEventOccurred(appId, ownerId, EventOperationCodec.decodeOneQuery(event));
    }
}
