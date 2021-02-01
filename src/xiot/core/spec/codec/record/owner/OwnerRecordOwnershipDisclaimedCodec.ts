import {OwnerRecordOwnershipDisclaimed} from '../../../typedef/record/owner/impl/OwnerRecordOwnershipDisclaimed';

export class OwnerRecordOwnershipDisclaimedCodec {

    static encode(record: OwnerRecordOwnershipDisclaimed): any {
        return {
            appId: record.appId,
            ownerId: record.ownerId,
            did: record.did
        };
    }

    static decode(o: any): OwnerRecordOwnershipDisclaimed {
        const appId = o.appId;
        const ownerId = o.ownerId;
        const did = o.did;
        return new OwnerRecordOwnershipDisclaimed(appId, ownerId, did);
    }
}
