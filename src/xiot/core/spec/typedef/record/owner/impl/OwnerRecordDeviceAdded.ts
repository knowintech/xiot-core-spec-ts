import {OwnerRecord} from '../OwnerRecord';
import {OwnerRecordType} from '../OwnerRecordType';
import {Summary} from '../../../summary/Summary';

export class OwnerRecordDeviceAdded extends OwnerRecord {

    did: string;
    summary: Summary;

    constructor(appId: string, ownerId: string, did: string, summary: Summary) {
        super(appId, ownerId);
        this.did = did;
        this.summary = summary;
    }

    subType(): string {
        return OwnerRecordType.DEVICE_ADDED.toString();
    }
}
