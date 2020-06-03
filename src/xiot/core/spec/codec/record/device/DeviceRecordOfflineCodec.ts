import {DeviceRecordOffline, SummaryCodec} from '../../../../../..';


export class DeviceRecordOfflineCodec {

    static encode(record: DeviceRecordOffline): any {
        return {
            did: record.did,
            summary: SummaryCodec.encode(record.summary),
        };
    }

    static decode(o: any): DeviceRecordOffline {
        const did = o.did;
        const summary = SummaryCodec.decodeObject(o.summary);
        return new DeviceRecordOffline(did, summary);
    }
}
