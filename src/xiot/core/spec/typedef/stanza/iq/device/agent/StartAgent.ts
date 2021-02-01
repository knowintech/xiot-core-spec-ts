import {IQQuery} from '../../IQQuery';
import {IQResult} from '../../IQResult';
import {AgentMapping, AgentServer} from '../../../../../../../..';

export const START_AGENT_METHOD = 'urn:xiot:start-agent';

export class QueryStartAgent extends IQQuery {

    public did: string;
    public agentServer: AgentServer;
    public agentMapping: AgentMapping;

    constructor(id: string, did: string, agentServer: AgentServer, agentMapping: AgentMapping) {
        super(id, START_AGENT_METHOD);
        this.did = did;
        this.agentServer = agentServer;
        this.agentMapping = agentMapping;
    }

    public result(username: string, password: string): ResultStartAgent {
        return new ResultStartAgent(this.id, username, password);
    }
}

export class ResultStartAgent extends IQResult {

    public username: string;
    public password: string;

    constructor(id: string, username: string, password: string) {
        super(id, START_AGENT_METHOD);
        this.username = username;
        this.password = password;
    }
}
