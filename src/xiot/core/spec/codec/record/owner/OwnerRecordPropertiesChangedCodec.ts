import {PropertyOperationCodec} from '../../../../../..';
import {OwnerRecordPropertiesChanged} from '../../../typedef/record/owner/impl/OwnerRecordPropertiesChanged';

export class OwnerRecordPropertiesChangedCodec {

    static encode(record: OwnerRecordPropertiesChanged): any {
        return {
            appId: record.appId,
            ownerId: record.ownerId,
            properties: PropertyOperationCodec.encodeQuerySET(record.properties),
        };
    }

    static decode(o: any): OwnerRecordPropertiesChanged {
        const appId = o.appId;
        const ownerId = o.ownerId;
        return new OwnerRecordPropertiesChanged(appId, ownerId, PropertyOperationCodec.decodeValues(o));
    }
}
