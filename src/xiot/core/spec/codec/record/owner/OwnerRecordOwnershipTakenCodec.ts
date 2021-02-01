import {OwnerRecordOwnershipTaken} from '../../../typedef/record/owner/impl/OwnerRecordOwnershipTaken';

export class OwnerRecordOwnershipTakenCodec {

    static encode(record: OwnerRecordOwnershipTaken): any {
        return {
            appId: record.appId,
            ownerId: record.ownerId,
            did: record.did
        };
    }

    static decode(o: any): OwnerRecordOwnershipTaken {
        const appId = o.appId;
        const ownerId = o.ownerId;
        const did = o.did;
        return new OwnerRecordOwnershipTaken(appId, ownerId, did);
    }
}
