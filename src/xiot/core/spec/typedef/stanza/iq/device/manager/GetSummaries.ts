import {IQQuery} from '../../IQQuery';
import {IQResult} from '../../IQResult';
import {Summary} from '../../../../summary/Summary';

export const GET_SUMMARIES_METHOD = 'urn:xiot:get-summaries';

export class QueryGetSummaries extends IQQuery {

    public devices: string[];

    constructor(id: string, devices: string[]) {
        super(id, GET_SUMMARIES_METHOD);
        this.devices = devices;
    }

    public result(summaries: Map<string, Summary>): ResultGetSummaries {
        return new ResultGetSummaries(this.id, summaries);
    }
}

export class ResultGetSummaries extends IQResult {

    public summaries: Map<string, Summary>;

    constructor(id: string, summaries: Map<string, Summary>) {
        super(id, GET_SUMMARIES_METHOD);
        this.summaries = summaries;
    }
}
