import {IqCodec} from '../../IqCodec';
import {IQQuery} from '../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../typedef/stanza/iq/IQResult';
import {QueryTakeOwnership, ResultTakeOwnership} from '../../../../typedef/stanza/iq/ownership/TakeOwnership';

export class TakeOwnershipCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryTakeOwnership) {
            return {
                'data': query.data
            };
        }

        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const data = content['data'];
        return new QueryTakeOwnership(id, data);
    }

    decodeResult(id: string, content: any): IQResult | null {
        return new ResultTakeOwnership(id);
    }
}
