import {XiotRecord} from '../XiotRecord';

export abstract class OwnerRecord implements XiotRecord {

    public appId: string;
    public ownerId: string;

    constructor(appId: string, ownerId: string) {
        this.appId = appId;
        this.ownerId = ownerId;
    }

    mainType(): string {
        return 'owner';
    }

    abstract subType(): string;
}
