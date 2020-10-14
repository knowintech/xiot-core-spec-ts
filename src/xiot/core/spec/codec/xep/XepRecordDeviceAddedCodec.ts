import {XepRecordDeviceAdded} from '../../typedef/xep/impl/XepRecordDeviceAdded';
import {SummaryCodec} from '../../../../..';

export class XepRecordDeviceAddedCodec {

    public static encodeObject(record: XepRecordDeviceAdded): any {
        return {
            ownerId: record.ownerId,
            did: record.did,
            summary: SummaryCodec.encodeObject(record.summary)
        };
    }

    public static decodeObject(o: any): XepRecordDeviceAdded {
        const ownerId = o.ownerId;
        const did = o.did;
        const summary = SummaryCodec.decodeObject(o.summary);
        return new XepRecordDeviceAdded(ownerId, did, summary);
    }
}
