import {DeviceRecordPropertiesChanged} from '../../../typedef/record/device/impl/DeviceRecordPropertiesChanged';
import {PropertyOperationCodec} from '../../operation/PropertyOperationCodec';

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
