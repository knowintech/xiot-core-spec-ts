import {DeviceRecordUpgrade} from '../../../typedef/record/device/impl/DeviceRecordUpgrade';
import {Version} from '../../../typedef/version/Version';

export class DeviceRecordUpgradeCodec {

    static encode(record: DeviceRecordUpgrade): any {
        return {
            status: record.status,
            description: record.description,
            did: record.did,
            percent: record.percent,
            version: record.version.toString(),
        };
    }

    static decode(o: any): DeviceRecordUpgrade {
        return new DeviceRecordUpgrade(o.status, o.description, o.did, o.percent, Version.fromString(o.version));
    }
}
