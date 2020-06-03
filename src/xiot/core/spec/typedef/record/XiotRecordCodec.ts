import {XiotRecord} from './XiotRecord';

export abstract class XiotRecordCodec<T extends XiotRecord, K> {

    /**
     * main type of record
     * @return type
     */
    abstract mainType(): string;

    /**
     * encode record to Object
     * @param record record
     * @return Object
     */
    abstract encode(record: K): K;

    /**
     * encode Object to record
     * @param subType subType of record
     * @param object Object
     * @return record
     */
    abstract decode(subType: string, object: K): T | null;
}
