import {DeviceRecordAccessKeyChanged} from '../../../typedef/record/device/impl/DeviceRecordAccessKeyChanged';

export class DeviceRecordAccessKeyChangedCodec {

    static encode(record: DeviceRecordAccessKeyChanged): any {
        return {
            did: record.did,
            key: record.key,
        };
    }

    static decode(o: any): DeviceRecordAccessKeyChanged {
        const did = o.did;
        const key = o.key;
        return new DeviceRecordAccessKeyChanged(did, key);
    }
}
