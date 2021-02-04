import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {QuerySetProperties, ResultSetProperties} from '../../../../../typedef/stanza/iq/device/control/SetProperties';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {PropertyOperationCodec} from '../../../../operation/PropertyOperationCodec';

export class SetPropertiesCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QuerySetProperties) {
            const list = PropertyOperationCodec.encodeQuerySET(query.properties);
            return {properties: list};
        }

        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        if (result instanceof ResultSetProperties) {
            const list = PropertyOperationCodec.encodeResultSET(result.properties);
            return {properties: list};
        }

        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const list = PropertyOperationCodec.decodeValues(content);
        return new QuerySetProperties(id, list);
    }

    decodeResult(id: string, content: any): IQResult | null {
        const list = PropertyOperationCodec.decodeStatus(content);
        return new ResultSetProperties(id, list);
    }
}

