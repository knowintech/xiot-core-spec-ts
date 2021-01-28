import {IqCodec} from '../../../IqCodec';
import {QueryGetProperties, ResultGetProperties} from '../../../../../typedef/stanza/iq/device/control/GetProperties';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {PropertyOperationCodec} from '../../../../../../../..';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';

export class GetPropertiesCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryGetProperties) {
            const list = PropertyOperationCodec.encodeQueryGETtoArray(query.properties);
            return {properties: list};
        }

        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        if (result instanceof ResultGetProperties) {
            const list = PropertyOperationCodec.encodeResultGET(result.properties);
            return {properties: list};
        }

        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const properties = content['properties'];
        const list = PropertyOperationCodec.decodePIDArray(properties);
        return new QueryGetProperties(id, list);
    }

    decodeResult(id: string, content: any): IQResult | null {
        const list = PropertyOperationCodec.decodeValues(content);
        return new ResultGetProperties(id, list);
    }
}
