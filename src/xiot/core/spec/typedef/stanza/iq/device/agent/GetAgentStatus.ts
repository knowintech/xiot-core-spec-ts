import {IQQuery} from '../../IQQuery';
import {IQResult} from '../../IQResult';
import {AgentStatus} from '../../../../../../../..';

export const GET_AGENT_STATUS_METHOD = 'urn:xiot:get-agent-status';

export class QueryGetAgentStatus extends IQQuery {

    public did: string;

    constructor(id: string, did: string) {
        super(id, GET_AGENT_STATUS_METHOD);
        this.did = did;
    }

    public result(status: AgentStatus): ResultGetAgentStatus {
        return new ResultGetAgentStatus(this.id, status);
    }
}

export class ResultGetAgentStatus extends IQResult {

    public status: AgentStatus;

    constructor(id: string, status: AgentStatus) {
        super(id, GET_AGENT_STATUS_METHOD);
        this.status = status;
    }
}
