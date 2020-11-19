import {DeviceRecord} from '../DeviceRecord';
import {DeviceRecordType} from '../DeviceRecordType';
import {Summary} from '../../../summary/Summary';

export class DeviceRecordOffline extends DeviceRecord {

    did: string;
    summary: Summary;

    constructor(did: string, summary: Summary) {
        super();
        this.did = did;
        this.summary = summary;
    }

    subType(): string {
        return DeviceRecordType.OFFLINE.toString();
    }
}
