import {XiotRecordCodec} from '../../typedef/record/XiotRecordCodec';
import {DeviceRecord} from '../../typedef/record/device/DeviceRecord';
import {DeviceRecordType, DeviceRecordTypeFromString} from '../../typedef/record/device/DeviceRecordType';
import {DeviceRecordOnlineCodec} from './device/DeviceRecordOnlineCodec';
import {DeviceRecordOfflineCodec} from './device/DeviceRecordOfflineCodec';
import {DeviceRecordPropertiesChangedCodec} from './device/DeviceRecordPropertiesChangedCodec';
import {DeviceRecordEventOccurredCodec} from './device/DeviceRecordEventOccurredCodec';
import {DeviceRecordChildrenRemovedCodec} from './device/DeviceRecordChildrenRemovedCodec';
import {DeviceRecordChildrenAddedCodec} from './device/DeviceRecordChildrenAddedCodec';
import {DeviceRecordAccessKeyChanged} from '../../typedef/record/device/impl/DeviceRecordAccessKeyChanged';
import {DeviceRecordAccessKeyChangedCodec} from './device/DeviceRecordAccessKeyChangedCodec';
import {DeviceRecordRootActive} from '../../typedef/record/device/impl/DeviceRecordRootActive';
import {DeviceRecordRootActiveCodec} from './device/DeviceRecordRootActiveCodec';
import {DeviceRecordOffline} from '../../typedef/record/device/impl/DeviceRecordOffline';
import {DeviceRecordPropertiesChanged} from '../../typedef/record/device/impl/DeviceRecordPropertiesChanged';
import {DeviceRecordEventOccurred} from '../../typedef/record/device/impl/DeviceRecordEventOccurred';
import {DeviceRecordChildrenRemoved} from '../../typedef/record/device/impl/DeviceRecordChildrenRemoved';
import {DeviceRecordChildrenAdded} from '../../typedef/record/device/impl/DeviceRecordChildrenAdded';
import {DeviceRecordOnline} from '../../typedef/record/device/impl/DeviceRecordOnline';
import {DeviceRecordRootInactiveCodec} from './device/DeviceRecordRootInactiveCodec';
import {DeviceRecordUpgrade} from '../../typedef/record/device/impl/DeviceRecordUpgrade';
import {DeviceRecordUpgradeCodec} from './device/DeviceRecordUpgradeCodec';
import {DeviceRecordDeviceTypeChangedCodec} from './device/DeviceRecordDeviceTypeChangedCodec';
import {DeviceRecordRootInactive} from '../../typedef/record/device/impl/DeviceRecordRootInactive';
import {DeviceRecordDeviceTypeChanged} from '../../typedef/record/device/impl/DeviceRecordDeviceTypeChanged';

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

            case DeviceRecordType.ACCESSKEY_CHANGED:
                if (record instanceof DeviceRecordAccessKeyChanged) {
                    o = DeviceRecordAccessKeyChangedCodec.encode(record);
                }
                break;

            case DeviceRecordType.ROOT_ACTIVE:
                if (record instanceof DeviceRecordRootActive) {
                    o = DeviceRecordRootActiveCodec.encode(record);
                }
                break;

            case DeviceRecordType.ROOT_INACTIVE:
                if (record instanceof DeviceRecordRootInactive) {
                    o = DeviceRecordRootInactiveCodec.encode(record);
                }
                break;

            case DeviceRecordType.UPGRADE:
                if (record instanceof DeviceRecordUpgrade) {
                    o = DeviceRecordUpgradeCodec.encode(record);
                }
                break;

            case DeviceRecordType.DEVICE_TYPE_CHANGED:
                if (record instanceof DeviceRecordDeviceTypeChanged) {
                    o = DeviceRecordDeviceTypeChangedCodec.encode(record);
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

            case DeviceRecordType.ACCESSKEY_CHANGED:
                record = DeviceRecordAccessKeyChangedCodec.decode(o);
                break;

            case DeviceRecordType.ROOT_ACTIVE:
                record = DeviceRecordRootActiveCodec.decode(o);
                break;

            case DeviceRecordType.ROOT_INACTIVE:
                record = DeviceRecordRootInactiveCodec.decode(o);
                break;

            case DeviceRecordType.UPGRADE:
                record = DeviceRecordUpgradeCodec.decode(o);
                break;

            case DeviceRecordType.DEVICE_TYPE_CHANGED:
                record = DeviceRecordDeviceTypeChangedCodec.decode(o);
                break;
            default:
                throw new Error('invalid subType: ' + subType);
        }

        return record;
    }
}
