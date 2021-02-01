import {IQQuery} from '../../IQQuery';
import {IQResult} from '../../IQResult';

export const UPGRADE_METHOD = 'urn:xiot:upgrade';

export class QueryUpgrade extends IQQuery {

    public did: string;

    constructor(id: string, did: string) {
        super(id, UPGRADE_METHOD);
        this.did = did;
    }

    public result(): ResultUpgrade {
        return new ResultUpgrade(this.id);
    }
}

export class ResultUpgrade extends IQResult {

    constructor(id: string) {
        super(id, UPGRADE_METHOD);
    }
}
