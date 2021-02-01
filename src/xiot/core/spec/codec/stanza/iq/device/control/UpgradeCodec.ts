import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {QueryUpgrade, ResultUpgrade} from '../../../../../typedef/stanza/iq/device/control/Upgrade';

export class UpgradeCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryUpgrade) {
            return {
                did: query.did
            };
        }
    }

    encodeResultContent(result: IQResult): any | null {
        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const did = content.did;
        return new QueryUpgrade(id, did);
    }

    decodeResult(id: string, content: any): IQResult | null {
        return new ResultUpgrade(id);
    }
}

