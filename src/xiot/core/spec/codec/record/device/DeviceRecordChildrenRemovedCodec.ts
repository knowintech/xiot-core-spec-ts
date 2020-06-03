import {DeviceChildCodec, DeviceRecordChildrenRemoved} from '../../../../../..';

export class DeviceRecordChildrenRemovedCodec {

    static encode(record: DeviceRecordChildrenRemoved): any {
        return {
            did: record.did,
            children: DeviceChildCodec.encodeArray(record.children)
        };
    }

    static decode(o: any): DeviceRecordChildrenRemoved {
        const e = new DeviceRecordChildrenRemoved(o.did);
        e.children = DeviceChildCodec.decodeArray(o.children);
        return e;
    }
}
