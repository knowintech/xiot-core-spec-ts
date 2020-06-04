import {XiotRecordCodec} from '../../typedef/record/XiotRecordCodec';
import {DeviceRecord} from '../../typedef/record/device/DeviceRecord';
import {DeviceRecordType, DeviceRecordTypeFromString} from '../../typedef/record/device/DeviceRecordType';
import {DeviceRecordOnlineCodec} from './device/DeviceRecordOnlineCodec';
import {
    DeviceRecordChildrenAdded,
    DeviceRecordChildrenRemoved,
    DeviceRecordEventOccurred,
    DeviceRecordOffline,
    DeviceRecordOnline,
    DeviceRecordPropertiesChanged
} from '../../../../..';
import {DeviceRecordOfflineCodec} from './device/DeviceRecordOfflineCodec';
import {DeviceRecordPropertiesChangedCodec} from './device/DeviceRecordPropertiesChangedCodec';
import {DeviceRecordEventOccurredCodec} from './device/DeviceRecordEventOccurredCodec';
import {DeviceRecordChildrenRemovedCodec} from './device/DeviceRecordChildrenRemovedCodec';
import {DeviceRecordChildrenAddedCodec} from './device/DeviceRecordChildrenAddedCodec';

export class DeviceRecordCodec extends XiotRecordCodec<DeviceRecord, any> {

    mainType(): string {
        return 'device';
    }

    encode(record: DeviceRecord): any {
        let o: any = {};

        switch (DeviceRecordTypeFromString(record.subType())) {
            case DeviceRecordType.ONLINE:
                if (record instanceof DeviceRecordOnline) {
                    o = DeviceRecordOnlineCodec.encode(record);
                }
                break;

            case DeviceRecordType.OFFLINE:
                if (record instanceof DeviceRecordOffline) {
                    o = DeviceRecordOfflineCodec.encode(record);
                }
                break;

            case DeviceRecordType.PROPERTIES_CHANGED:
                if (record instanceof DeviceRecordPropertiesChanged) {
                    o = DeviceRecordPropertiesChangedCodec.encode(record);
                }
                break;

            case DeviceRecordType.EVENT_OCCURRED:
                if (record instanceof DeviceRecordEventOccurred) {
                    o = DeviceRecordEventOccurredCodec.encode(record);
                }
                break;

            case DeviceRecordType.CHILDREN_REMOVED:
                if (record instanceof DeviceRecordChildrenRemoved) {
                    o = DeviceRecordChildrenRemovedCodec.encode(record);
                }
                break;

            case DeviceRecordType.CHILDREN_ADDED:
                if (record instanceof DeviceRecordChildrenAdded) {
                    o = DeviceRecordChildrenAddedCodec.encode(record);
                }
                break;

            default:
                break;
        }

        return o;
    }

    decode(subType: string, o: any): DeviceRecord {
        let record: DeviceRecord;

        switch (subType) {
            case DeviceRecordType.ONLINE:
                record = DeviceRecordOnlineCodec.decode(o);
                break;

            case DeviceRecordType.OFFLINE:
                record = DeviceRecordOfflineCodec.decode(o);
                break;

            case DeviceRecordType.PROPERTIES_CHANGED:
                record = DeviceRecordPropertiesChangedCodec.decode(o);
                break;

            case DeviceRecordType.EVENT_OCCURRED:
                record = DeviceRecordEventOccurredCodec.decode(o);
                break;

            case DeviceRecordType.CHILDREN_REMOVED:
                record = DeviceRecordChildrenRemovedCodec.decode(o);
                break;

            case DeviceRecordType.CHILDREN_ADDED:
                record = DeviceRecordChildrenAddedCodec.decode(o);
                break;

            default:
                throw new Error('invalid subType: ' + subType);
        }

        return record;
    }
}
