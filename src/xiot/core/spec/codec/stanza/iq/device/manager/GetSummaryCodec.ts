import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {QueryGetSummary, ResultGetSummary} from '../../../../../typedef/stanza/iq/device/manager/GetSummary';
import {SummaryCodec} from '../../../../summary/SummaryCodec';

export class GetSummaryCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryGetSummary) {
            return {
                did: query.did
            };
        }

        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        if (result instanceof ResultGetSummary) {
            return {
                summary: SummaryCodec.encodeObject(result.summary)
            };
        }

        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const did = content['did'];
        return new QueryGetSummary(id, did);
    }

    decodeResult(id: string, content: any): IQResult | null {
        const summary = content['summary'];
        return new ResultGetSummary(id, SummaryCodec.decodeObject(summary));
    }
}

