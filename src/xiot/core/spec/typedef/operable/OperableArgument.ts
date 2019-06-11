import {Argument, Property} from '../../../../..';

export class OperableArgument extends Argument {

    properties: Property[] = [];

    constructor(piid: number) {
        super(piid);
    }
}
