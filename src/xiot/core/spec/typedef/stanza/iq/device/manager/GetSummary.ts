import {IQQuery} from '../../IQQuery';
import {IQResult} from '../../IQResult';
import {Summary} from '../../../../../../../..';

export const GET_SUMMARY_METHOD = 'urn:xiot:get-summary';

export class QueryGetSummary extends IQQuery {

    public did: string;

    constructor(id: string, did: string) {
        super(id, GET_SUMMARY_METHOD);
        this.did = did;
    }

    public result(summary: Summary): ResultGetSummary {
        return new ResultGetSummary(this.id, summary);
    }
}

export class ResultGetSummary extends IQResult {

    public summary: Summary;

    constructor(id: string, summary: Summary) {
        super(id, GET_SUMMARY_METHOD);
        this.summary = summary;
    }
}
