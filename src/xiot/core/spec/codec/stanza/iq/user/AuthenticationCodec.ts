import {IqCodec} from '../../IqCodec';
import {IQQuery} from '../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../typedef/stanza/iq/IQResult';
import {QueryAuthentication, ResultAuthentication} from '../../../../typedef/stanza/iq/user/Authentication';

export class AuthenticationCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryAuthentication) {
            return {
                'access-token': query.accessToken
            };
        }
    }

    encodeResultContent(result: IQResult): any | null {
        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const token = content['access-token'];
        return new QueryAuthentication(id, token);
    }

    decodeResult(id: string, content: any): IQResult | null {
        return new ResultAuthentication(id);
    }
}
