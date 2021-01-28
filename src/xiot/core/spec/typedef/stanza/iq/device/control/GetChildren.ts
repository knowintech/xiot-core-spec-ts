import {IQQuery} from '../../IQQuery';
import {IQResult} from '../../IQResult';
import {Child} from '../../../../../../../..';

export const GET_CHILDREN_METHOD = 'urn:xiot:get-children';

export class QueryGetChildren extends IQQuery {

    public did: string;

    constructor(id: string, did: string) {
        super(id, GET_CHILDREN_METHOD);
        this.did = did;
    }

    public result(children: Child[]): ResultGetChildren {
        return new ResultGetChildren(this.id, children);
    }
}

export class ResultGetChildren extends IQResult {

    public children: Child[];

    constructor(id: string, children: Child[]) {
        super(id, GET_CHILDREN_METHOD);
        this.children = children;
    }
}
