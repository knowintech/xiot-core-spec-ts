import {ChildCodec, DeviceRecordChildrenRemoved} from '../../../../../..';

export class DeviceRecordChildrenRemovedCodec {

    static encode(record: DeviceRecordChildrenRemoved): any {
        return {
            did: record.did,
            children: record.children
        };
    }

    static decode(o: any): DeviceRecordChildrenRemoved {
        const e = new DeviceRecordChildrenRemoved(o.did);
        e.children = o.children;
        return e;
    }
}
