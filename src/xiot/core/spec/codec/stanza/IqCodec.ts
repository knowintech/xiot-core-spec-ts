import {IQQuery} from '../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../typedef/stanza/iq/IQResult';

export interface IqCodec {

  encodeQueryContent(query: IQQuery): any | null;

  encodeResultContent(result: IQResult): any | null;

  decodeQuery(id: string, content: any): IQQuery | null;

  decodeResult(id: string, content: any): IQResult | null;
}
