import {XepRecordPropertiesChanged} from '../../typedef/xep/impl/XepRecordPropertiesChanged';
import {PropertyOperationCodec} from '../operation/PropertyOperationCodec';

export class XepRecordDevicePropertiesChangedCodec {

    public static encodeObject(record: XepRecordPropertiesChanged): any {
        return {
            ownerId: record.ownerId,
            properties: PropertyOperationCodec.encodeQuerySET(record.operations)
        };
    }

    public static decodeObject(o: any): XepRecordPropertiesChanged {
        const ownerId = o.ownerId;
        const properties = PropertyOperationCodec.decodeValues(o);
        return new XepRecordPropertiesChanged(ownerId, properties);
    }
}
