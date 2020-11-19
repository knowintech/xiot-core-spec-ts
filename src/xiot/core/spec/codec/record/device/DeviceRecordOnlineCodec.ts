import {DeviceRecordOnline} from '../../../typedef/record/device/impl/DeviceRecordOnline';
import {SummaryCodec} from '../../summary/SummaryCodec';

export class DeviceRecordOnlineCodec {

    static encode(record: DeviceRecordOnline): any {
        return {
            did: record.did,
            summary: SummaryCodec.encodeObject(record.summary),
        };
    }

    static decode(o: any): DeviceRecordOnline {
        const did = o.did;
        const summary = SummaryCodec.decodeObject(o.summary);
        return new DeviceRecordOnline(did, summary);
    }
}
