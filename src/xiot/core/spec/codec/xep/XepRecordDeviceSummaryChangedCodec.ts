import {XepRecordDeviceSummaryChanged} from '../../typedef/xep/impl/XepRecordDeviceSummaryChanged';
import {SummaryCodec} from '../../../../..';

export class XepRecordDeviceSummaryChangedCodec {

    public static encodeObject(record: XepRecordDeviceSummaryChanged): any {
        return {
            ownerId: record.ownerId,
            did: record.did,
            summary: SummaryCodec.encodeObject(record.summary)
        };
    }

    public static decodeObject(o: any): XepRecordDeviceSummaryChanged {
        const ownerId = o.ownerId;
        const did = o.did;
        const summary = SummaryCodec.decodeObject(o.summary);
        return new XepRecordDeviceSummaryChanged(ownerId, did, summary);
    }
}
