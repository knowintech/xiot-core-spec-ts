import {Child} from '../../typedef/child/Child';
import {SummaryCodec} from '../../codec/summary/SummaryCodec';

export class ChildCodec {

    static decodeArray(array: any[]): Child[] {
        return array ? array.map(x => ChildCodec.decode(x)) : [];
    }

    static decode(o: any): Child {
        return new Child(o.did, SummaryCodec.decodeObject(o.summary));
    }

    static encode(child: Child): any {
        return {
            did: child.did,
            summary: SummaryCodec.encodeObject(child.summary)
        };
    }

    static encodeArray(children: Child[]): any[] {
        return (children != null) ? children.map(s => ChildCodec.encode(s)) : [];
    }
}
