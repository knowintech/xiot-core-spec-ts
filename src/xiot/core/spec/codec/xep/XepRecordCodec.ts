import {XepRecordDeviceAdded} from '../../typedef/xep/impl/XepRecordDeviceAdded';
import {XepRecord} from '../../typedef/xep/XepRecord';
import {XepRecordType, XepRecordTypeFromString} from '../../typedef/xep/XepRecordType';
import {XepRecordDeviceSummaryChanged} from '../../typedef/xep/impl/XepRecordDeviceSummaryChanged';
import {XepRecordDeviceRemovedCodec} from './XepRecordDeviceRemovedCodec';
import {XepRecordEventOccurred} from '../../typedef/xep/impl/XepRecordEventOccurred';
import {XepRecordDeviceEventOccurredCodec} from './XepRecordDeviceEventOccurredCodec';
import {XepRecordPropertiesChanged} from '../../typedef/xep/impl/XepRecordPropertiesChanged';
import {XepRecordDeviceSummaryChangedCodec} from './XepRecordDeviceSummaryChangedCodec';
import {XepRecordDevicePropertiesChangedCodec} from './XepRecordDevicePropertiesChangedCodec';
import {XepRecordDeviceAddedCodec} from './XepRecordDeviceAddedCodec';
import {XepRecordDeviceRemoved} from '../../typedef/xep/impl/XepRecordDeviceRemoved';

export class XepRecordCodec {

    public static encodeObject(record: XepRecord): any {
        let payload: any = {};
        switch (record.type()) {
            case XepRecordType.DEVICE_ADDED:
                if (record instanceof XepRecordDeviceAdded) {
                    payload = XepRecordDeviceAddedCodec.encodeObject(record);
                }
                break;

            case XepRecordType.DEVICE_REMOVED:
                if (record instanceof XepRecordDeviceRemoved) {
                    payload = XepRecordDeviceRemovedCodec.encodeObject(record);
                }
                break;

            case XepRecordType.DEVICE_EVENT_OCCURRED:
                if (record instanceof XepRecordEventOccurred) {
                    payload = XepRecordDeviceEventOccurredCodec.encodeObject(record);
                }
                break;

            case XepRecordType.DEVICE_PROPERTIES_CHANGED:
                if (record instanceof XepRecordPropertiesChanged) {
                    payload = XepRecordDevicePropertiesChangedCodec.encodeObject(record);
                }
                break;

            case XepRecordType.DEVICE_SUMMARY_CHANGED:
                if (record instanceof XepRecordDeviceSummaryChanged) {
                    payload = XepRecordDeviceSummaryChangedCodec.encodeObject(record);
                }
                break;

            default:
                break;
        }

        return {
            'class': record.type().toString(),
            'payload': payload
        };
    }

    public static decodeObject(o: any): XepRecord {
        const payload = o.payload;
        let record: XepRecord | null = null;

        switch (XepRecordTypeFromString(o.class)) {
            case XepRecordType.DEVICE_ADDED:
                record = XepRecordDeviceAddedCodec.decodeObject(payload);
                break;
            case XepRecordType.DEVICE_SUMMARY_CHANGED:
                record = XepRecordDeviceSummaryChangedCodec.decodeObject(payload);
                break;
            case XepRecordType.DEVICE_PROPERTIES_CHANGED:
                record = XepRecordDevicePropertiesChangedCodec.decodeObject(payload);
                break;
            case XepRecordType.DEVICE_EVENT_OCCURRED:
                record = XepRecordDeviceEventOccurredCodec.decodeObject(payload);
                break;
            case XepRecordType.DEVICE_REMOVED:
                record = XepRecordDeviceRemovedCodec.decodeObject(payload);
                break;
            default:
                break;
        }

        return <XepRecord>record;
    }
}
