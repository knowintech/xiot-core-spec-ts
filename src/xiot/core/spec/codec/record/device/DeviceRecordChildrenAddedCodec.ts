import {ChildCodec, DeviceRecordChildrenAdded} from '../../../../../..';

export class DeviceRecordChildrenAddedCodec {

    static encode(record: DeviceRecordChildrenAdded): any {
        return {
            did: record.did,
            children: ChildCodec.encodeArray(record.children)
        };
    }

    static decode(o: any): DeviceRecordChildrenAdded {
        const e = new DeviceRecordChildrenAdded(o.did);
        e.children = ChildCodec.decodeArray(o.children);
        return e;
    }
}
