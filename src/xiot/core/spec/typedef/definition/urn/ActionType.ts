import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class ActionType extends Urn {

    constructor(string: string) {
        super([UrnType.ACTION], string);
    }
}
