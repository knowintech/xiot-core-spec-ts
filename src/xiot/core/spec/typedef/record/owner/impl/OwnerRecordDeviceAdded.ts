import {OwnerRecord} from '../OwnerRecord';
import {Summary} from '../../../../../../..';
import {OwnerRecordType} from '../OwnerRecordType';

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
