import {DeviceChildCodec, DeviceRecordChildrenAdded} from '../../../../../..';

export class DeviceRecordChildrenAddedCodec {

    static encode(record: DeviceRecordChildrenAdded): any {
        return {
            did: record.did,
            children: DeviceChildCodec.encodeArray(record.children)
        };
    }

    static decode(o: any): DeviceRecordChildrenAdded {
        const e = new DeviceRecordChildrenAdded(o.did);
        e.children = DeviceChildCodec.decodeArray(o.children);
        return e;
    }
}
