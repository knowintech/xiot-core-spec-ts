import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {QueryVerifyFinish, ResultVerifyFinish} from '../../../../../typedef/stanza/iq/device/verify/VerifyFinish';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {SummaryPrivateCodec} from '../../../../summary/SummaryPrivateCodec';

export class VerifyFinishCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryVerifyFinish) {
            const o: any = {
                'device-id': query.deviceId,
                'device-type': query.deviceType,
                signature: query.signature,
                codec: query.codec
            };

            if (query._private !== null) {
                o._private = SummaryPrivateCodec.encodeObject(query._private);
            }

            return o;
        }

        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const queryVerifyFinish = new QueryVerifyFinish(id,
            content['device-id'],
            content['device-type'],
            content['signature'],
            content['codec']);
        const _private = content['_private'];
        if (_private) {
            queryVerifyFinish._private = SummaryPrivateCodec.decodeObject(_private);
        }

        return queryVerifyFinish;
    }

    decodeResult(id: string, content: any): IQResult | null {
        return new ResultVerifyFinish(id);
    }
}
