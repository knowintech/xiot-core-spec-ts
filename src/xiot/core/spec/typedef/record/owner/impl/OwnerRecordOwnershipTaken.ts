import {OwnerRecord} from '../OwnerRecord';
import {OwnerRecordType} from '../OwnerRecordType';

export class OwnerRecordOwnershipTaken extends OwnerRecord {

    did: string;

    constructor(appId: string, ownerId: string, did: string) {
        super(appId, ownerId);
        this.did = did;
    }

    subType(): string {
        return OwnerRecordType.OWNERSHIP_TAKEN.toString();
    }
}
