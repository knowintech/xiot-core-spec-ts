import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {QueryStopAgent, ResultStopAgent} from '../../../../../typedef/stanza/iq/device/agent/StopAgent';

export class StopAgentCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {

        if (query instanceof QueryStopAgent) {
            return {
                did: query.did
            };
        }

        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const did: string = content['did'];
        return new QueryStopAgent(id, did);
    }

    decodeResult(id: string, content: any): IQResult | null {
        return new ResultStopAgent(id);
    }
}
