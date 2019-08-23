import {DeviceSummaryCodec, XiotDeviceChanged} from '../../../../../..';

export class XiotDeviceChangedCodec {

    static encode(event: XiotDeviceChanged): any {
        return {
            devices: DeviceSummaryCodec.encodeArray(event.devices),
        };
    }

    static decode(o: any): XiotDeviceChanged {
        const event = new XiotDeviceChanged();
        event.devices = DeviceSummaryCodec.decodeArray(o.devices);
        return event;
    }
}
