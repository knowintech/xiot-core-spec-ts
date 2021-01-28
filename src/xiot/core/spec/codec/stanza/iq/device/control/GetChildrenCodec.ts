import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {QueryGetChildren, ResultGetChildren} from '../../../../../typedef/stanza/iq/device/control/GetChildren';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {ChildCodec} from '../../../../../../../..';

export class GetChildrenCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryGetChildren) {
            return {
                did: query.did
            };
        }
    }

    encodeResultContent(result: IQResult): any | null {
        if (result instanceof ResultGetChildren) {
            return {children: ChildCodec.encodeArray(result.children)};
        }

        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const did = content.did;
        return new QueryGetChildren(id, did);
    }

    decodeResult(id: string, content: any): IQResult | null {
        return new ResultGetChildren(id, ChildCodec.decodeArray(content['children']));
    }
}

