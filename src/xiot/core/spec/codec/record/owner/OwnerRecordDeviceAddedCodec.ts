import {OwnerRecordDeviceAdded} from '../../../typedef/record/owner/impl/OwnerRecordDeviceAdded';
import {SummaryCodec} from '../../summary/SummaryCodec';

export class OwnerRecordDeviceAddedCodec {

    static encode(record: OwnerRecordDeviceAdded): any {
        return {
            appId: record.appId,
            ownerId: record.ownerId,
            did: record.did,
            summary: SummaryCodec.encodeObject(record.summary)
        };
    }

    static decode(o: any): OwnerRecordDeviceAdded {
        const appId = o.appId;
        const ownerId = o.ownerId;
        const did = o.did;
        return new OwnerRecordDeviceAdded(appId, ownerId, did, SummaryCodec.decodeObject(o.summary));
    }
}
