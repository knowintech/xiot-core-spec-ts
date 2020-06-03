import {DeviceRecordOnline, SummaryCodec} from '../../../../../..';

export class DeviceRecordOnlineCodec {

    static encode(record: DeviceRecordOnline): any {
        return {
            did: record.did,
            summary: SummaryCodec.encode(record.summary),
        };
    }

    static decode(o: any): DeviceRecordOnline {
        const did = o.did;
        const summary = SummaryCodec.decodeObject(o.summary);
        return new DeviceRecordOnline(did, summary);
    }
}
