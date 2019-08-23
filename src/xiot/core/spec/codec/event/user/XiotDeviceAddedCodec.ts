import {DeviceSummaryCodec, XiotDeviceAdded} from '../../../../../..';

export class XiotDeviceAddedCodec {

    static encode(event: XiotDeviceAdded): any {
        return {
            devices: DeviceSummaryCodec.encodeArray(event.devices),
        };
    }

    static decode(o: any): XiotDeviceAdded {
        const event = new XiotDeviceAdded();
        event.devices = DeviceSummaryCodec.decodeArray(o.devices);
        return event;
    }
}
