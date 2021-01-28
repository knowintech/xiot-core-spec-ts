import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {QuerySetAccessKey, ResultSetAccessKey} from '../../../../../typedef/stanza/iq/device/key/SetAccessKey';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';

export class SetAccessKeyCodec implements IqCodec {

  encodeQueryContent(query: IQQuery): any | null {
    if (query instanceof QuerySetAccessKey) {
      return {
        key: query.key
      };
    }

    return null;
  }

  encodeResultContent(query: IQResult): any | null {
    return null;
  }

  decodeQuery(id: string, content: any): IQQuery | null {
    return new QuerySetAccessKey(id, content['key']);
  }

  decodeResult(id: string, content: any): IQResult | null {
    return new ResultSetAccessKey(id);
  }
}

