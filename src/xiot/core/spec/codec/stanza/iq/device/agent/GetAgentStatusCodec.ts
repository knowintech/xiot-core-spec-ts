import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {QueryGetAgentStatus, ResultGetAgentStatus} from '../../../../../typedef/stanza/iq/device/agent/GetAgentStatus';
import {AgentStatusFromString} from '../../../../../../../..';

export class GetAgentStatusCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {

        if (query instanceof QueryGetAgentStatus) {
            return {
                did: query.did
            };
        }

        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        if (result instanceof ResultGetAgentStatus) {
            return {
                'agent-status': result.status.toString()
            };
        }

        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const did: string = content['did'];
        return new QueryGetAgentStatus(id, did);
    }

    decodeResult(id: string, content: any): IQResult | null {
        const status: any = content['agent-status'];
        return new ResultGetAgentStatus(id, AgentStatusFromString(status));
    }
}
