import {Message} from '../Message';
import {
    OwnerRecord,
    OwnerRecordType, OwnerRecordTypeFromString,
    OwnerRecordTypeToString
} from '../../../../../../..';

export const MESSAGE_OWNER_TOPID = 'urn:xiot:owner';

export class OwnerMessage extends Message {

    public payload: OwnerRecord;

    constructor(id: string, type: OwnerRecordType, payload: OwnerRecord) {
        super(id, MESSAGE_OWNER_TOPID, OwnerRecordTypeToString(type));
        this.payload = payload;
    }

    public payloadType(): OwnerRecordType {
        return OwnerRecordTypeFromString(this.type);
    }
}
