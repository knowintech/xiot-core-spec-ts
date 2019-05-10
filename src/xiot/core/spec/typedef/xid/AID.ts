import {XID3} from './XID3';

export class AID extends XID3 {

    constructor(did: string, siid: number, iid: number) {
        super(did, siid, iid);
    }

    toString(): string {
        return super.toString();
    }

}
