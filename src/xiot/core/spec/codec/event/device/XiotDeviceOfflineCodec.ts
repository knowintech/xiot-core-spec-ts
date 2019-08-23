import {XiotDeviceOffline} from '../../../../../..';


export class XiotDeviceOfflineCodec {

    static encode(event: XiotDeviceOffline): any {
        return {
            did: event.did,
            type: event.deviceType,
            accesspoint: event.accesspoint,
            bridge: event.bridge,
        };
    }

    static decode(o: any): XiotDeviceOffline {
        const did = o.did;
        const type = o.type;
        const ap = o.accesspoint;
        const bridge = o.bridge;
        return new XiotDeviceOffline(did, type, ap, bridge);
    }
}
