import {DeviceRecordRootActive} from '../../../typedef/record/device/impl/DeviceRecordRootActive';
import {ChildCodec} from '../../child/ChildCodec';

export class DeviceRecordRootActiveCodec {

    static encode(record: DeviceRecordRootActive): any {
        return {
            did: record.did,
            children: ChildCodec.encodeArray(record.children)
        };
    }

    static decode(o: any): DeviceRecordRootActive {
        const e = new DeviceRecordRootActive(o.did);
        e.children = ChildCodec.decodeArray(o.children);
        return e;
    }
}
