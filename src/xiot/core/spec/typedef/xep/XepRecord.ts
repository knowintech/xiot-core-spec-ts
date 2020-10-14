import {XepRecordType} from './XepRecordType';

export abstract class XepRecord {

    readonly ownerId: string;

    protected constructor(ownerId: string) {
        this.ownerId = ownerId;
    }

    public abstract type(): XepRecordType
}
