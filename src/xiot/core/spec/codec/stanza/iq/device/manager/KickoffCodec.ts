import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {QueryKickoff, ResultGetKickoff} from '../../../../../typedef/stanza/iq/device/manager/Kickoff';

export class KickoffCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryKickoff) {
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
        const did = content['did'];
        return new QueryKickoff(id, did);
    }

    decodeResult(id: string, content: any): IQResult | null {
        return new ResultGetKickoff(id);
    }
}

