import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';
import {DeviceSummary} from '../../../../../..';

export class XiotDeviceChanged extends XiotEvent {

    devices: DeviceSummary[] = [];

    constructor() {
        super(XiotEventType.USER_DEVICE_CHANGED);
    }
}
