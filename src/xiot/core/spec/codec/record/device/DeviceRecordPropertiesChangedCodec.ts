import {PropertyOperationCodec, DeviceRecordPropertiesChanged} from '../../../../../..';

export class DeviceRecordPropertiesChangedCodec {

    static encode(record: DeviceRecordPropertiesChanged): any {
        return {
            properties: PropertyOperationCodec.encodeQuerySET(record.properties),
        };
    }

    static decode(o: any): DeviceRecordPropertiesChanged {
        const properties = PropertyOperationCodec.decodeValues(o);
        return new DeviceRecordPropertiesChanged(properties);
    }
}
