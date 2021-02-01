import {DeviceRecordDeviceTypeChanged} from '../../../typedef/record/device/impl/DeviceRecordDeviceTypeChanged';

export class DeviceRecordDeviceTypeChangedCodec {

    static encode(record: DeviceRecordDeviceTypeChanged): any {
        return {
            did: record.did,
            type: record.type,
        };
    }

    static decode(o: any): DeviceRecordDeviceTypeChanged {
        return new DeviceRecordDeviceTypeChanged(o.did, o.type);
    }
}
