import {XiotRecord} from '../XiotRecord';

export abstract class DeviceRecord implements XiotRecord {

    did: string;

    protected constructor(did: string) {
        this.did = did;
    }

    mainType(): string {
        return 'device';
    }

    abstract subType(): string ;
}
