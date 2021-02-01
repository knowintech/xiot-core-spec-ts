import {OwnerRecordDeviceRemoved} from '../../../typedef/record/owner/impl/OwnerRecordDeviceRemoved';

export class OwnerRecordDeviceRemovedCodec {

    static encode(record: OwnerRecordDeviceRemoved): any {
        return {
            appId: record.appId,
            ownerId: record.ownerId,
            did: record.did
        };
    }

    static decode(o: any): OwnerRecordDeviceRemoved {
        const appId = o.appId;
        const ownerId = o.ownerId;
        const did = o.did;
        return new OwnerRecordDeviceRemoved(appId, ownerId, did);
    }
}
