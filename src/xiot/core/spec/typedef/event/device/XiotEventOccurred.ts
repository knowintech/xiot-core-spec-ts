import {XiotEvent} from '../XiotEvent';
import {EventOperation} from '../../../../../..';
import {XiotEventType} from '../XiotEventType';

export class XiotEventOccurred extends XiotEvent {

    operation: EventOperation;

    constructor(operation: EventOperation) {
        super(XiotEventType.DEVICE_EVENT_OCCURRED);
        this.operation = operation;
    }
}
