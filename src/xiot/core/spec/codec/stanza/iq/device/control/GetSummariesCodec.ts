import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {QueryGetSummaries, ResultGetSummaries} from '../../../../../typedef/stanza/iq/device/control/GetSummaries';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {Summary, SummaryCodec} from '../../../../../../../..';

export class GetSummariesCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryGetSummaries) {
            return {
                devices: query.devices
            };
        }
    }

    encodeResultContent(result: IQResult): any | null {
        if (result instanceof ResultGetSummaries) {
            const devices: any[] = [];

            result.devices.forEach((s, did) => {
                devices.push({
                    did,
                    summary: SummaryCodec.encodeObject(s)
                });
            });

            return {
                devices: devices
            };
        }

        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const devices = content.devices;
        return new QueryGetSummaries(id, devices);
    }

    decodeResult(id: string, content: any): IQResult | null {
        const devices: Map<String, Summary> = new Map<String, Summary>();

        const list: any[] = content.devices;
        list.forEach(o => {
            const did = o.did;
            const summary = SummaryCodec.decodeObject(o.summary);
            devices.set(did, summary);
        });

        return new ResultGetSummaries(id, devices);
    }
}

