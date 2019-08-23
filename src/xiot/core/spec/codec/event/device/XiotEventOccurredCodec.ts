import {ArgumentCodec, EventOperation, XiotEventOccurred} from '../../../../../..';

export class XiotEventOccurredCodec {

    static encode(event: XiotEventOccurred): any {
        return {
            eid: event.operation.eid ? event.operation.eid.toString() : '',
            oid: event.operation.oid,
            arguments: ArgumentCodec.encodeArray(event.operation.getArguments()),
        };
    }

    static decode(o: any): XiotEventOccurred {
        const eid = o.eid;
        const oid = o.oid;
        const array = o.arguments;

        const e = new EventOperation();
        e.eid = eid;
        e.oid = oid;
        e.setArguments(ArgumentCodec.decodeArray(array));

        return new XiotEventOccurred(e);
    }
}
