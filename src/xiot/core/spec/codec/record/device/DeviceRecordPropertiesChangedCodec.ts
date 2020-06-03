import {PropertyOperationCodec, DeviceRecordPropertiesChanged} from '../../../../../..';

export class DeviceRecordPropertiesChangedCodec {

    static encode(record: DeviceRecordPropertiesChanged): any {
        return {
            did: record.did,
            properties: PropertyOperationCodec.encodeQuerySET(record.properties),
        };
    }

    static decode(o: any): DeviceRecordPropertiesChanged {
        const did = o.did;
        const properties = PropertyOperationCodec.decodeValues(o);
        return new DeviceRecordPropertiesChanged(did, properties);
    }
}
