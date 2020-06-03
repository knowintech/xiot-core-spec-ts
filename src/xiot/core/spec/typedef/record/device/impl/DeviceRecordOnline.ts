import {DeviceRecord} from '../DeviceRecord';
import {DeviceRecordType} from '../DeviceRecordType';
import {Summary} from '../../../../../../..';

export class DeviceRecordOnline extends DeviceRecord {

    summary: Summary;

    constructor(did: string, summary: Summary) {
        super(did);
        this.summary = summary;
    }

    subType(): string {
        return DeviceRecordType.ONLINE.toString();
    }
}
