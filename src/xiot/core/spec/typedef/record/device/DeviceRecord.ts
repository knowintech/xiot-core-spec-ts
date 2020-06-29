import {XiotRecord} from '../XiotRecord';

export abstract class DeviceRecord implements XiotRecord {

    mainType(): string {
        return 'device';
    }

    abstract subType(): string;
}
