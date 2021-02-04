import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {QueryStartAgent, ResultStartAgent} from '../../../../../typedef/stanza/iq/device/agent/StartAgent';
import {AgentMappingCodec} from '../../../../agent/AgentMappingCodec';
import {AgentServerCodec} from '../../../../agent/AgentServerCodec';

export class StartAgentCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {

        if (query instanceof QueryStartAgent) {
            return {
                server: AgentServerCodec.encode(query.agentServer),
                mapping: AgentMappingCodec.encode(query.agentMapping),
                did: query.did
            };
        }

        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        if (result instanceof ResultStartAgent) {
            return {
                'username': result.username,
                'password': result.password
            };
        }

        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const did: string = content['did'];
        const server: any = content['server'];
        const mapping: any = content['mapping'];
        return new QueryStartAgent(id, did, AgentServerCodec.decode(server), AgentMappingCodec.decode(mapping));
    }

    decodeResult(id: string, content: any): IQResult | null {
        const username: any = content['username'];
        const password: any = content['password'];
        return new ResultStartAgent(id, username, password);
    }
}
