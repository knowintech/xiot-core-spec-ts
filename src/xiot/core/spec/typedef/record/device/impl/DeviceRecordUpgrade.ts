import {DeviceRecord} from '../DeviceRecord';
import {DeviceRecordType} from '../DeviceRecordType';
import {Version} from '../../../version/Version';

export class DeviceRecordUpgrade extends DeviceRecord {

    status: number;
    description: string;
    did: string;
    percent: number;
    version: Version;

    constructor(status: number, description: string, did: string, percent: number, version: Version) {
        super();
        this.did = did;
        this.description = description;
        this.status = status;
        this.version = version;
        this.percent = percent;
    }

    subType(): string {
        return DeviceRecordType.UPGRADE.toString();
    }
}
