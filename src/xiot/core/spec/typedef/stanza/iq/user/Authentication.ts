import {IQQuery} from '../IQQuery';
import {IQResult} from '../IQResult';

export const AUTHENTICATION_METHOD = 'urn:xiot:authentication';

export class QueryAuthentication extends IQQuery {

    public accessToken: string;

    constructor(id: string, accessToken: string) {
        super(id, AUTHENTICATION_METHOD);
        this.accessToken = accessToken;
    }

    public result(): ResultAuthentication {
        return new ResultAuthentication(this.id);
    }
}

export class ResultAuthentication extends IQResult {

    constructor(id: string) {
        super(id, AUTHENTICATION_METHOD);
    }
}
