import {IQQuery} from '../../IQQuery';
import {IQResult} from '../../IQResult';

export const KICKOFF_METHOD = 'urn:xiot:kickoff';

export class QueryKickoff extends IQQuery {

    public did: string;

    constructor(id: string, did: string) {
        super(id, KICKOFF_METHOD);
        this.did = did;
    }

    public result(): ResultGetKickoff {
        return new ResultGetKickoff(this.id);
    }
}

export class ResultGetKickoff extends IQResult {

    constructor(id: string) {
        super(id, KICKOFF_METHOD);
    }
}
