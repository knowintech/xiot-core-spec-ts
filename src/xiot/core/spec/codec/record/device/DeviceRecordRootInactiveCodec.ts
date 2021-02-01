import {DeviceRecordRootInactive} from '../../../typedef/record/device/impl/DeviceRecordRootInactive';

export class DeviceRecordRootInactiveCodec {

    static encode(record: DeviceRecordRootInactive): any {
        return {
            did: record.did,
        };
    }

    static decode(o: any): DeviceRecordRootInactive {
        return new DeviceRecordRootInactive(o.did);
    }
}
