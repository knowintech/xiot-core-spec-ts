import {IQQuery} from '../../IQQuery';
import {IQResult} from '../../IQResult';

export const STOP_AGENT_METHOD = 'urn:xiot:stop-agent';

export class QueryStopAgent extends IQQuery {

    public did: string;

    constructor(id: string, did: string) {
        super(id, STOP_AGENT_METHOD);
        this.did = did;
    }

    public result(): ResultStopAgent {
        return new ResultStopAgent(this.id);
    }
}

export class ResultStopAgent extends IQResult {

    constructor(id: string) {
        super(id, STOP_AGENT_METHOD);
    }
}
