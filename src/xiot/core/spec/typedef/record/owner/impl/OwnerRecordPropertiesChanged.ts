import {OwnerRecord} from '../OwnerRecord';
import {OwnerRecordType} from '../OwnerRecordType';
import {PropertyOperation} from '../../../../../../..';

export class OwnerRecordPropertiesChanged extends OwnerRecord {

    properties: PropertyOperation[];

    constructor(appId: string, ownerId: string, properties: PropertyOperation[]) {
        super(appId, ownerId);
        this.properties = properties;
    }

    subType(): string {
        return OwnerRecordType.DEVICE_PROPERTIES_CHANGED.toString();
    }
}
