import {IQQuery} from '../IQQuery';
import {IQResult} from '../IQResult';

export const TAKE_OWNERSHIP_METHOD = 'urn:xiot:take-ownership';

export class QueryTakeOwnership extends IQQuery {

    public data: string;

    constructor(id: string, data: string) {
        super(id, TAKE_OWNERSHIP_METHOD);
        this.data = data;
    }

    public result(): ResultTakeOwnership {
        return new ResultTakeOwnership(this.id);
    }
}

export class ResultTakeOwnership extends IQResult {

    constructor(id: string) {
        super(id, TAKE_OWNERSHIP_METHOD);
    }
}
