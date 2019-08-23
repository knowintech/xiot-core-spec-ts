import {XiotChild} from '../../../../../..';

export class XiotChildCodec {

    static decodeArray(list: any[]): XiotChild[] {
        const array: XiotChild[] = [];

        if (list != null) {
            list.forEach(o => array.push(XiotChildCodec.decode(o)));
        }

        return array;
    }

    static decode(o: any): XiotChild {
        const did = o.did;
        const type = o.type;
        const ap = o.accesspoint;
        const bridge = o.bridge;
        return new XiotChild(did, type, ap, bridge);
    }

    static encodeArray(list: XiotChild[]): any[] {
        const array: any[] = [];

        list.forEach((o) => {
            array.push(XiotChildCodec.encode(o));
        });

        return array;
    }

    static encode(child: XiotChild): any {
        return {
            did: child.did,
            type: child.deviceType,
            accesspoint: child.accesspoint,
            bridge: child.bridge,
        };
    }
}
