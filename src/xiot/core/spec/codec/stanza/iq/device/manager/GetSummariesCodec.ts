import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {QueryGetSummaries, ResultGetSummaries} from '../../../../../typedef/stanza/iq/device/manager/GetSummaries';
import {SummaryCodec} from '../../../../summary/SummaryCodec';
import {Summary} from '../../../../../typedef/summary/Summary';

export class GetSummariesCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryGetSummaries) {
            return {
                devices: query.devices
            };
        }

        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        if (result instanceof ResultGetSummaries) {
            const summaries: any = [];
            result.summaries.forEach((value, key) => {
                summaries.push({
                    did: key,
                    summary: SummaryCodec.encodeObject(value)
                });
            });

            return {
                devices: summaries
            };
        }

        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const devices: string[] = content['devices'];
        return new QueryGetSummaries(id, devices);
    }

    decodeResult(id: string, content: any): IQResult | null {
        const devices: Map<string, Summary> = new Map();
        const array: any[] = content['devices'];

        if (array) {
            array.forEach(value => {
                const did = value['did'];
                const summary = value['summary'];
                devices.set(did, SummaryCodec.decodeObject(summary));
            });
        }

        return new ResultGetSummaries(id, devices);
    }
}

