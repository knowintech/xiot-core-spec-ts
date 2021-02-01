import {OwnerRecord} from '../OwnerRecord';
import {OwnerRecordType} from '../OwnerRecordType';
import {EventOperation} from '../../../../../../..';

export class OwnerRecordEventOccurred extends OwnerRecord {

    event: EventOperation;

    constructor(appId: string, ownerId: string, event: EventOperation) {
        super(appId, ownerId);
        this.event = event;
    }

    subType(): string {
        return OwnerRecordType.DEVICE_EVENT_OCCURRED.toString();
    }
}
