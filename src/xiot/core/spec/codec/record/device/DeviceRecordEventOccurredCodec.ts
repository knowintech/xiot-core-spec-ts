import {DeviceRecordEventOccurred, EventOperationCodec} from '../../../../../../';

export class DeviceRecordEventOccurredCodec {

    static encode(record: DeviceRecordEventOccurred): any {
        return {
            did: record.did,
            event: EventOperationCodec.encodeOneQuery(record.operation)
        };
    }

    static decode(o: any): DeviceRecordEventOccurred {
        const did = o.did;
        const e = EventOperationCodec.decodeOneQuery(o.event);
        return new DeviceRecordEventOccurred(did, e);
    }
}
