
import {OwnerRecord} from '../../typedef/record/owner/OwnerRecord';
import {XiotRecordCodec} from '../../typedef/record/XiotRecordCodec';
import {OwnerRecordType, OwnerRecordTypeFromString} from '../../typedef/record/owner/OwnerRecordType';
import {OwnerRecordDeviceSummaryChanged} from '../../typedef/record/owner/impl/OwnerRecordDeviceSummaryChanged';
import {OwnerRecordDeviceAdded} from '../../typedef/record/owner/impl/OwnerRecordDeviceAdded';
import {OwnerRecordDeviceAddedCodec} from './owner/OwnerRecordDeviceAddedCodec';
import {OwnerRecordPropertiesChanged} from '../../typedef/record/owner/impl/OwnerRecordPropertiesChanged';
import {OwnerRecordPropertiesChangedCodec} from './owner/OwnerRecordPropertiesChangedCodec';
import {OwnerRecordEventOccurred} from '../../typedef/record/owner/impl/OwnerRecordEventOccurred';
import {OwnerRecordDeviceSummaryChangedCodec} from './owner/OwnerRecordDeviceSummaryChangedCodec';
import {OwnerRecordEventOccurredCodec} from './owner/OwnerRecordEventOccurredCodec';
import {OwnerRecordDeviceRemoved} from '../../typedef/record/owner/impl/OwnerRecordDeviceRemoved';
import {OwnerRecordOwnershipTaken} from '../../typedef/record/owner/impl/OwnerRecordOwnershipTaken';
import {OwnerRecordDeviceRemovedCodec} from './owner/OwnerRecordDeviceRemovedCodec';
import {OwnerRecordOwnershipTakenCodec} from './owner/OwnerRecordOwnershipTakenCodec';
import {OwnerRecordOwnershipDisclaimed} from '../../typedef/record/owner/impl/OwnerRecordOwnershipDisclaimed';
import {OwnerRecordOwnershipDisclaimedCodec} from './owner/OwnerRecordOwnershipDisclaimedCodec';

export class OwnerRecordCodec extends XiotRecordCodec<OwnerRecord, any> {

    mainType(): string {
        return 'owner';
    }

    encode(record: OwnerRecord): any {
        let o: any = {};

        switch (OwnerRecordTypeFromString(record.subType())) {
            case OwnerRecordType.DEVICE_SUMMARY_CHANGED:
                if (record instanceof OwnerRecordDeviceSummaryChanged) {
                    o = OwnerRecordDeviceSummaryChangedCodec.encode(record);
                }
                break;

            case OwnerRecordType.DEVICE_ADDED:
                if (record instanceof OwnerRecordDeviceAdded) {
                    o = OwnerRecordDeviceAddedCodec.encode(record);
                }
                break;

            case OwnerRecordType.DEVICE_PROPERTIES_CHANGED:
                if (record instanceof OwnerRecordPropertiesChanged) {
                    o = OwnerRecordPropertiesChangedCodec.encode(record);
                }
                break;

            case OwnerRecordType.DEVICE_EVENT_OCCURRED:
                if (record instanceof OwnerRecordEventOccurred) {
                    o = OwnerRecordEventOccurredCodec.encode(record);
                }
                break;

            case OwnerRecordType.DEVICE_REMOVED:
                if (record instanceof OwnerRecordDeviceRemoved) {
                    o = OwnerRecordDeviceRemovedCodec.encode(record);
                }
                break;

            case OwnerRecordType.OWNERSHIP_TAKEN:
                if (record instanceof OwnerRecordOwnershipTaken) {
                    o = OwnerRecordOwnershipTakenCodec.encode(record);
                }
                break;

            case OwnerRecordType.OWNERSHIP_DISCLAIMED:
                if (record instanceof OwnerRecordOwnershipDisclaimed) {
                    o = OwnerRecordOwnershipDisclaimedCodec.encode(record);
                }
                break;

            default:
                break;
        }

        return o;
    }

    decode(subType: string, o: any): OwnerRecord {
        let record: OwnerRecord;

        switch (subType) {
            case OwnerRecordType.DEVICE_SUMMARY_CHANGED:
                record = OwnerRecordDeviceSummaryChangedCodec.decode(o);
                break;

            case OwnerRecordType.DEVICE_ADDED:
                record = OwnerRecordDeviceAddedCodec.decode(o);
                break;

            case OwnerRecordType.DEVICE_PROPERTIES_CHANGED:
                record = OwnerRecordPropertiesChangedCodec.decode(o);
                break;

            case OwnerRecordType.DEVICE_EVENT_OCCURRED:
                record = OwnerRecordEventOccurredCodec.decode(o);
                break;

            case OwnerRecordType.DEVICE_REMOVED:
                record = OwnerRecordDeviceRemovedCodec.decode(o);
                break;

            case OwnerRecordType.OWNERSHIP_TAKEN:
                record = OwnerRecordOwnershipTakenCodec.decode(o);
                break;

            case OwnerRecordType.OWNERSHIP_DISCLAIMED:
                record = OwnerRecordOwnershipDisclaimedCodec.decode(o);
                break;

            default:
                throw new Error('invalid subType: ' + subType);
        }

        return record;
    }
}
