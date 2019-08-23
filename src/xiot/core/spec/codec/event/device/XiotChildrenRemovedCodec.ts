import {XiotChildrenRemoved} from '../../../../../..';
import {XiotChildCodec} from './XiotChildCodec';

export class XiotChildrenRemovedCodec {

    static encode(event: XiotChildrenRemoved): any {
        return {
            children: XiotChildCodec.encodeArray(event.children)
        };
    }

    static decode(o: any): XiotChildrenRemoved {
        const e = new XiotChildrenRemoved();
        e.children = XiotChildCodec.decodeArray(o.children);
        return e;
    }
}
