import {DeviceRecordEventOccurred} from '../../../typedef/record/device/impl/DeviceRecordEventOccurred';
import {EventOperationCodec} from '../../operation/EventOperationCodec';

export class DeviceRecordEventOccurredCodec {

    static encode(record: DeviceRecordEventOccurred): any {
        return {
            event: EventOperationCodec.encodeOneQuery(record.operation)
        };
    }

    static decode(o: any): DeviceRecordEventOccurred {
        const e = EventOperationCodec.decodeOneQuery(o.event);
        return new DeviceRecordEventOccurred(e);
    }
}
