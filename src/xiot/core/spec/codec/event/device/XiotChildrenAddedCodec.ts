import {XiotChildrenAdded} from '../../../../../..';
import {XiotChildCodec} from './XiotChildCodec';

export class XiotChildrenAddedCodec {

    static encode(event: XiotChildrenAdded): any {
        return {
            children: XiotChildCodec.encodeArray(event.children)
        };
    }

    static decode(o: any): XiotChildrenAdded {
        const e = new XiotChildrenAdded();
        e.children = XiotChildCodec.decodeArray(o.children);
        return e;
    }
}
