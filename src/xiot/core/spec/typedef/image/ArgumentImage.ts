import {Argument, Property} from '../../../../../index';

export class ArgumentImage extends Argument {

    properties: Property[] = [];

    constructor(piid: number) {
        super(piid);
    }
}
