import {Summary} from '../summary/Summary';

export class Child {

    did: string;
    summary: Summary;

    constructor(did: string, summary: Summary) {
        this.did = did;
        this.summary = summary;
    }
}

