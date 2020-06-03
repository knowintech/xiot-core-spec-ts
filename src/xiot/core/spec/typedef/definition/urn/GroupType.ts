import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class GroupType extends Urn {

    constructor(string: string) {
        super([UrnType.GROUP], string);
    }
}
