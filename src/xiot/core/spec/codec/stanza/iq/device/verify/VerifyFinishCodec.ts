import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {QueryVerifyFinish, ResultVerifyFinish} from '../../../../../typedef/stanza/iq/device/verify/VerifyFinish';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';

export class VerifyFinishCodec implements IqCodec {

  encodeQueryContent(query: IQQuery): any | null {
    if (query instanceof QueryVerifyFinish) {
      return {
        'device-id': query.deviceId,
        'device-type': query.deviceType,
        signature: query.signature,
        codec: query.codec
      };
    }

    return null;
  }

  encodeResultContent(result: IQResult): any | null {
    return null;
  }

  decodeQuery(id: string, content: any): IQQuery | null {
    return new QueryVerifyFinish(id,
      content['device-id'],
      content['device-type'],
      content['signature'],
      content['codec']);
  }

  decodeResult(id: string, content: any): IQResult | null {
    return new ResultVerifyFinish(id);
  }
}
