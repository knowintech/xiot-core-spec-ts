import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';

export class XiotDeviceOnline extends XiotEvent {

    did = '';
    deviceType = '';
    accesspoint = '';
    bridge = '';

    constructor(did: string, deviceType: string, accesspoint: string, bridge: string) {
        super(XiotEventType.DEVICE_OFFLINE);
        this.did = did;
        this.deviceType = deviceType;
        this.accesspoint = accesspoint;
        this.bridge = bridge;
    }
}
