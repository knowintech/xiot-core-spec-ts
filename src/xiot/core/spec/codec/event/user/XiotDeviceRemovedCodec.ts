import {XiotDeviceRemoved} from '../../../../../..';

export class XiotDeviceRemovedCodec {

    static encode(event: XiotDeviceRemoved): any {
        return {
            devices: event.devices,
        };
    }

    static decode(o: any): XiotDeviceRemoved {
        const event = new XiotDeviceRemoved();
        event.devices = o.devices;
        return event;
    }
}
