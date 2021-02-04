import {SummaryExtra} from '../../typedef/summary/SummaryExtra';

export class SummaryExtraCodec {

    static decodeObject(o: any): SummaryExtra {
        const extra = new SummaryExtra();
        extra.name = o['name'];
        return extra;
    }

    static encodeObject(e: SummaryExtra): any {
        return {
            name: e.name
        };
    }

}
