import {EventOperation} from '../../../../../../..';
import {DeviceRecord} from '../DeviceRecord';
import {DeviceRecordType} from '../DeviceRecordType';

export class DeviceRecordEventOccurred extends DeviceRecord {

    operation: EventOperation;

    constructor(operation: EventOperation) {
        super();
        this.operation = operation;
    }

    subType(): string {
        return DeviceRecordType.EVENT_OCCURRED.toString();
    }
}
