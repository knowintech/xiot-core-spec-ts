import {XepRecord} from '../XepRecord';
import {XepRecordType} from '../XepRecordType';
import {EventOperation, PropertyOperation, Summary} from '../../../../../..';

export class XepRecordPropertiesChanged extends XepRecord {

    readonly operations: PropertyOperation[];

    constructor(ownerId: string, operations: PropertyOperation[]) {
        super(ownerId);
        this.operations = operations;
    }

    type(): XepRecordType {
        return XepRecordType.DEVICE_PROPERTIES_CHANGED;
    }
}
