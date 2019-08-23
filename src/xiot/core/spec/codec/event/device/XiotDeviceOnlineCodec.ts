import {XiotDeviceOnline} from '../../../../../..';

export class XiotDeviceOnlineCodec {

    static encode(event: XiotDeviceOnline): any {
        return {
            did: event.did,
            type: event.deviceType,
            accesspoint: event.accesspoint,
            bridge: event.bridge,
        };
    }

    static decode(o: any): XiotDeviceOnline {
        const did = o.did;
        const type = o.type;
        const ap = o.accesspoint;
        const bridge = o.bridge;
        return new XiotDeviceOnline(did, type, ap, bridge);
    }
}
