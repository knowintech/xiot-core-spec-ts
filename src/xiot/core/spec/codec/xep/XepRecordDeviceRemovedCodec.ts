import {XepRecordDeviceRemoved} from '../../typedef/xep/impl/XepRecordDeviceRemoved';

export class XepRecordDeviceRemovedCodec {

    public static encodeObject(record: XepRecordDeviceRemoved): any {
        return {
            ownerId: record.ownerId,
            did: record.did,
        };
    }

    public static decodeObject(o: any): XepRecordDeviceRemoved {
        const ownerId = o.ownerId;
        const did = o.did;
        return new XepRecordDeviceRemoved(ownerId, did);
    }
}
