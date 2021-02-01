import {SummaryCodec} from '../../../../../..';
import {OwnerRecordDeviceSummaryChanged} from '../../../typedef/record/owner/impl/OwnerRecordDeviceSummaryChanged';

export class OwnerRecordDeviceSummaryChangedCodec {

    static encode(record: OwnerRecordDeviceSummaryChanged): any {
        return {
            appId: record.appId,
            ownerId: record.ownerId,
            did: record.did,
            summary: SummaryCodec.encodeObject(record.summary)
        };
    }

    static decode(o: any): OwnerRecordDeviceSummaryChanged {
        const appId = o.appId;
        const ownerId = o.ownerId;
        const did = o.did;
        return new OwnerRecordDeviceSummaryChanged(appId, ownerId, did, SummaryCodec.decodeObject(o.summary));
    }
}
