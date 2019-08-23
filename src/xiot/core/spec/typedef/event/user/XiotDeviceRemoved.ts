import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';

export class XiotDeviceRemoved extends XiotEvent {

    devices: string[] = [];

    constructor() {
        super(XiotEventType.USER_DEVICE_REMOVED);
    }
}
