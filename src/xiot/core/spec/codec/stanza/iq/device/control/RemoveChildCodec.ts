import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {QueryRemoveChild, ResultRemoveChild} from '../../../../../typedef/stanza/iq/device/control/RemoveChild';

export class RemoveChildCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryRemoveChild) {
            return {
                did: query.did,
                child: query.childId
            };
        }
    }

    encodeResultContent(result: IQResult): any | null {
        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const did = content.did;
        const childId = content.child;
        return new QueryRemoveChild(id, did, childId);
    }

    decodeResult(id: string, content: any): IQResult | null {
        return new ResultRemoveChild(id);
    }
}

